const inquirer = require('inquirer');
const fs = require('fs');

function generateLogo(text, color, shape) {
  // Logic to generate the logo based on the provided inputs
  const logo = {
    text,
    color,
    shape,
  };
  
  return logo; // Return the generated logo
}

function saveLogoToFile(logo) {
  // Logic to save the logo to a file
  const logoData = JSON.stringify(logo);
  fs.writeFileSync('logo.json', logoData);
}

module.exports = {
  generateLogo,
  saveLogoToFile,
};