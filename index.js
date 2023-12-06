const inquirer = require('inquirer');
const logoGenerator = require('./lib/logoGenerator');

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
      name: 'color',
      message: 'Enter the text color (e.g., red, blue, #FF0000):',
    },
    // Prompt for shape choice
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
  ]);
}

promptUser()
  .then((answers) => {
    const logo = logoGenerator.generateLogo(answers.text, answers.color, answers.shape);
    logoGenerator.saveLogoToFile(logo);
  })
  .catch((error) => {
    console.error('An error occurred while prompting for user input:', error);
  });