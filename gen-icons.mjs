import { readFileSync, writeFileSync } from 'node:fs';

const raw = readFileSync('C:/Users/alek/AppData/Local/Temp/opencode/icons.json', 'utf8');
const data = JSON.parse(raw);

const names = Object.keys(data);
const lines = [];
lines.push('// Auto-generated from react-icons. Do not edit by hand.');
lines.push('export interface IconDef {');
lines.push('  viewBox: string;');
lines.push('  paths: string[];');
lines.push('  circles?: { cx: string; cy: string; r: string }[];');
lines.push('}');
lines.push('');
lines.push('export const icons: Record<string, IconDef> = {');

for (const name of names) {
  const entry = data[name];
  const paths = entry.paths
    .filter((p) => p.fill !== 'none')
    .map((p) => p.d);
  const circles = entry.circles.map((c) => ({ cx: c.cx, cy: c.cy, r: c.r }));
  const parts = [`viewBox: ${JSON.stringify(entry.viewBox)}`];
  parts.push(`paths: ${JSON.stringify(paths)}`);
  if (circles.length) parts.push(`circles: ${JSON.stringify(circles)}`);
  lines.push(`  ${name}: { ${parts.join(', ')} },`);
}
lines.push('};');
lines.push('');

writeFileSync('C:/Users/alek/Documents/programacion/aleknss.github.io/src/icons.ts', lines.join('\n'));
console.log('wrote src/icons.ts,', names.length, 'icons');
