const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');

if (!fs.existsSync(outDir)) {
  console.log('out/ directory does not exist yet. Run build first.');
  process.exit(0);
}

const files = fs.readdirSync(outDir);

let count = 0;
files.forEach(file => {
  if (file.endsWith('.html') && file !== 'index.html' && file !== '404.html') {
    const routeName = file.replace(/\.html$/, '');
    const targetDir = path.join(outDir, routeName);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const indexHtmlPath = path.join(targetDir, 'index.html');
    const sourceHtmlPath = path.join(outDir, file);

    // Copy source.html -> targetDir/index.html so both clean URLs and trailing slashes resolve
    fs.copyFileSync(sourceHtmlPath, indexHtmlPath);
    count++;
  }
});

console.log(`[Zero-404 Shield] Successfully ensured ${count} dual routes (both .html and /index.html exist in out/)!`);
