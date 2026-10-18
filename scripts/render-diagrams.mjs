import { existsSync, mkdirSync, readFileSync, readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceDirectory = resolve(root, 'docs/assets/diagrams/sources');
const outputDirectory = resolve(root, 'docs/assets/diagrams');
const image = 'ghcr.io/plantuml/plantuml@sha256:47870c1f76cfb3747bc7090bfe83013a4e3105b5a0bb1515e2baf5d3e2b3ee9d';
const sources = readdirSync(sourceDirectory)
  .filter((file) => file.endsWith('.puml'))
  .sort();
const looks = [
  { name: 'light', flags: [] },
  { name: 'dark', flags: ['-DDARK=1'] },
];

if (sources.length === 0) throw new Error('No PlantUML sources were found.');

const check = process.argv.includes('--check');
const outputs = looks.flatMap((look) => sources.map((source) => `${look.name}/${outputName(source)}`));
const previous = check ? new Map(outputs.map((output) => [output, readOutput(output)])) : null;

for (const look of looks) {
  mkdirSync(resolve(outputDirectory, look.name), { recursive: true });
  const result = spawnSync(
    'docker',
    [
      'run',
      '--rm',
      '--volume',
      `${root}:/workspace`,
      '--workdir',
      '/workspace',
      image,
      '-tsvg',
      '-charset',
      'UTF-8',
      ...look.flags,
      '-o',
      `../${look.name}`,
      ...sources.map((source) => `docs/assets/diagrams/sources/${source}`),
    ],
    { cwd: root, encoding: 'utf8' },
  );
  if (result.error) throw result.error;
  if (result.status !== 0) {
    process.stderr.write(result.stderr || result.stdout);
    process.exit(result.status ?? 1);
  }
}

if (previous) {
  const changed = outputs.filter((output) => !previous.get(output)?.equals(readOutput(output)));
  if (changed.length > 0) {
    throw new Error(`Generated diagrams were stale: ${changed.join(', ')}`);
  }
}

console.log(`${previous ? 'Validated' : 'Rendered'} ${sources.length} PlantUML diagram${sources.length === 1 ? '' : 's'} in a light and a dark look.`);

function outputName(source) {
  return source.replace(/\.puml$/, '.svg');
}

function readOutput(output) {
  const path = resolve(outputDirectory, output);
  return existsSync(path) ? readFileSync(path) : undefined;
}
