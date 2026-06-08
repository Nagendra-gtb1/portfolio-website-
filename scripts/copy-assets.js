import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve('./');
const src = path.join(projectRoot, 'dist', 'client', 'client', 'assets');
const dest = path.join(projectRoot, 'assets');

if (!fs.existsSync(src)) {
  console.error(`Source assets folder not found: ${src}`);
  process.exit(1);
}

if (fs.existsSync(dest)) {
  fs.rmSync(dest, { recursive: true, force: true });
}

fs.cpSync(src, dest, { recursive: true });
console.log(`Copied ${src} to ${dest}`);
