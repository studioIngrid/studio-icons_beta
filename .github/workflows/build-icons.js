const fs = require('fs');
const path = require('path');

const inputDir = './lottie-json';
const outputFile = './src/studio-icons_beta.js';

// Read files from the input directory
const files = fs.readdirSync(inputDir);

let iconTemplates = {};

files.forEach(file => {
  const filePath = path.join(inputDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(file, '.json');
  
  iconTemplates[fileName] = JSON.parse(fileContent);
});

// Prepare the content for the output file
const contentBefore = `
/** get templates, create array */
var iconTemplates = `;
const contentAfter = `;
var svg_icons = {};
const iconAlts = {
code continues here`;

const finalContent = `${contentBefore}${JSON.stringify(iconTemplates, null, 2)}${contentAfter}`;

// Write to the output file
fs.writeFileSync(outputFile, finalContent);

console.log('studio-icons_beta.js has been updated');
