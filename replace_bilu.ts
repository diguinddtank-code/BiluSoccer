import * as fs from 'fs';
import * as path from 'path';

const walk = (dir: string): string[] => {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
        results = results.concat(walk(file));
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.json') || file.endsWith('.md')) {
        results.push(file);
      }
    }
  });
  return results;
};

const files = walk(process.cwd());

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalObject = content;

  const replacements = [
    { regex: /BISA/gi, replace: 'BISA' },
    { regex: /BISA/gi, replace: 'BISA' },
    { regex: /BISA/gi, replace: 'BISA' },
    { regex: /BISA/gi, replace: 'BISA' },
    { regex: /BISA/gi, replace: 'BISA' },
    { regex: /Projeto BILU/gi, replace: 'Projeto BILU' },
    { regex: /Projeto BILU/gi, replace: 'Projeto BILU' },
    { regex: /Proyecto BILU/gi, replace: 'Proyecto BILU' },
    { regex: /BISA/gi, replace: 'BISA' },
  ];

  replacements.forEach(r => {
    content = content.replace(r.regex, r.replace);
  });

  // Also replace freestanding BISA or BISA (not inside URL)
  content = content.replace(/(?<![a-zA-Z\-])\b(?:BISA|BISA)\b(?![a-zA-Z\-])/g, 'BISA');

  if (content !== originalObject) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
