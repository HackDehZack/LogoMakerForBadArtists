const inquirer = require('inquirer');
const fs = require('fs');

const logoGenerator = require('./lib/logoGenerator');

// Prompt for user input using Inquirer
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => {
        if (input.length > 3) {
          return 'Please enter a maximum of three characters.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal number):',
    },
  ])
  .then((answers) => {
    // Process user input and generate the logo using the logoGenerator module
    const logo = logoGenerator.generateLogo(answers);

    // Write the generated logo to an SVG file named `logo.svg`
    fs.writeFile('logo.svg', logo, (err) => {
      if (err) {
        console.error('An error occurred while writing the logo file:', err);
        return;
      }
      console.log('Generated logo.svg');
    });
  })
  .catch((error) => {
    console.error('An error occurred while prompting for user input:', error);
  });