const inquirer = require('inquirer');
const fs = require('fs');

const logoGenerator = require('./lib/logoGenerator');

// Prompt for user input using Inquirer
inquirer
  .prompt([
    // Define your prompt questions here
  ])
  .then((answers) => {
    // Process user input and generate the logo using the logoGenerator module
    const logo = logoGenerator.generateLogo(answers);

    // Write the generated logo to a file
    fs.writeFile('logo.txt', logo, (err) => {
      if (err) {
        console.error('An error occurred while writing the logo file:', err);
        return;
      }
      console.log('Logo file generated successfully!');
    });
  })
  .catch((error) => {
    console.error('An error occurred while prompting for user input:', error);
  });