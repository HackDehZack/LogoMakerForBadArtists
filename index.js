const inquirer = require('inquirer');
const { generateLogo, saveLogoToFile } = require('./lib/logoGenerator');

function promptUser() {
  return inquirer.prompt([
    // Prompt for text input
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for your logo:',
    },
    // Prompt for text color
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (e.g., red, blue, #FF0000):',
    },
    // Prompt for shape choice
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    // Prompt for shape color
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (e.g., red, blue, #FF0000):',
    },
  ]);
}

function generateAndSaveLogo() {
  promptUser()
    .then((answers) => {
      const { text, textColor, shape, shapeColor } = answers;
      const logo = generateLogo(text, textColor, shape, shapeColor);
      saveLogoToFile(logo);
      console.log('Generated logo.svg');
    })
    .catch((error) => {
      console.error('An error occurred while prompting for user input:', error);
    });
}

generateAndSaveLogo();