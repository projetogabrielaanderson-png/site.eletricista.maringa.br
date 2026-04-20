import fs from 'node:fs';
import path from 'node:path';

const distDir = 'dist';

function organize(dir: string) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      organize(fullPath);
    } else if (file.endsWith('.html') && file !== 'index.html' && file !== '404.html') {
      const name = file.slice(0, -5);
      const newDir = path.join(dir, name);
      
      if (!fs.existsSync(newDir)) {
        fs.mkdirSync(newDir, { recursive: true });
      }
      
      const newPath = path.join(newDir, 'index.html');
      fs.renameSync(fullPath, newPath);
      console.log(`Moved ${fullPath} -> ${newPath}`);
    }
  }
}

console.log('Organizing HTML files into directories...');
organize(distDir);
console.log('Done!');
