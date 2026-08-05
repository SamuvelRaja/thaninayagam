const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('app');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/from "\.\/components/g, 'from "@/app/components');
  content = content.replace(/from "\.\/lib/g, 'from "@/app/lib');
  content = content.replace(/from "\.\.\/components/g, 'from "@/app/components');
  content = content.replace(/from "\.\.\/lib/g, 'from "@/app/lib');
  content = content.replace(/from "\.\.\/\.\.\/components/g, 'from "@/app/components');
  content = content.replace(/from "\.\.\/\.\.\/lib/g, 'from "@/app/lib');
  fs.writeFileSync(file, content);
});
console.log("Imports updated successfully!");
