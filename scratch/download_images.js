const fs = require('fs');
const path = require('path');
const https = require('https');

const home = fs.readFileSync('scratch/home.html', 'utf8');
const katturaigal = fs.readFileSync('scratch/katturaigal.html', 'utf8');

const regex = /images\/[a-zA-Z0-9_\-\.\/%]+/g;
let matches = [...home.matchAll(regex), ...katturaigal.matchAll(regex)].map(m => m[0]);
matches = [...new Set(matches)]; // unique

const baseUrl = 'https://www.annavinpadaippugal.info/';

matches.forEach(img => {
  const decodedImg = decodeURI(img); // in case there are %20
  const url = baseUrl + img; // the server might need %20
  const filepath = path.join('public', decodedImg);
  
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(filepath);
      res.pipe(file);
    } else {
      console.error(`Failed to download ${url}: ${res.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${url}:`, err.message);
  });
});
console.log(`Downloading ${matches.length} images...`);
