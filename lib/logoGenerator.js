const inquirer = require('inquirer');
const fs = require('fs');

function generateLogo(text, color, shape) {
  // Logic to generate the logo based on the provided inputs
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;

  if (shape.toLowerCase() === "circle") {
    svg += `<circle cx="100" cy="100" r="50" fill="${color}" />`;
  } else if (shape.toLowerCase() === "square") {
    svg += `<rect x="50" y="50" width="100" height="100" fill="${color}" />`;
  } else if (shape.toLowerCase() === "triangle") {
    svg += `<polygon points="100,50 50,150 150,150" fill="${color}" />`;
  }

  svg += `<text x="300" y="200" fill="#fff" font-size="24" text-anchor="middle" dominant-baseline="middle">${text}</text>`;
  svg += `</svg>`;



  return svg; // Return the generated SVG
}

function saveLogoToFile(logo) {
  // Logic to save the logo to a file
  fs.writeFileSync('logo.svg', logo);
}

module.exports = {
  generateLogo,
  saveLogoToFile,
};