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

  // Replacements for Methodology and "Global Elite soccer" context, avoiding Projeto Bilu geography
  const replacements = [
    { regex: /Global Elite Methodology/gi, replace: 'Global Elite Methodology' },
    { regex: /Metodologia Global de Elite/gi, replace: 'Metodologia Global de Elite' },
    { regex: /Metodología Global de Élite/gi, replace: 'Metodología Global de Élite' },
    { regex: /Global Elite soccer training/gi, replace: 'Global Elite soccer training' },
    { regex: /Global Elite soccer/gi, replace: 'Global Elite soccer' },
    { regex: /Global Elite soccer/g, replace: 'Global Elite Soccer' },
  ];

  replacements.forEach(r => {
    content = content.replace(r.regex, r.replace);
  });

  if (content !== originalObject) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
