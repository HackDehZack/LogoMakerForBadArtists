# LogoMakerForBadArtists

## Overview
The SVG Logo Maker is a command-line application designed for freelance web developers who want to generate simple logos for their projects without the need for a graphic designer (Can't draw). The application allows users to input text, choose text and shape colors, and select a shape from a list. It then generates an SVG file that represents the logo based on the user's input.

## Features
- Accepts user input from the command line
- Prompts the user to enter up to three characters for the text
- Allows the user to specify the text color using a color keyword or a hexadecimal number
- Presents a list of shape options (circle, triangle, and square) for the user to choose from
- Allows the user to specify the shape color using a color keyword or a hexadecimal number
- Generates an SVG file named `logo.svg` based on the user's input
- Prints the message "Generated logo.svg" in the command line
- Displays a 300x200 pixel image when the `logo.svg` file is opened in a browser

## Packages Used
- **Inquirer**: Used to collect user input from the command line.
- **Jest**: Utilized for running unit tests to ensure the functionality and accuracy of the application.
-**NodeJS**: Used to run the program
-**Fs**: File system used specifically used to create and write the generated SVG file (logo.svg) to the file system

## Getting Started
To run the SVG Logo Maker application on your local machine, follow these steps:

1. Clone the repository: 
   ````
   git clone git@github.com:HackDehZack/LogoMakerForBadArtists.git
   ```

2. Navigate to the project directory:
   ````
   cd svg-logo-maker
   ```

3. Install dependencies:
   ````
   npm install
   ```

4. Start the application:
   ````
   node index.js
   ```

5. Follow the prompts to enter the text, text color, shape, and shape color.

6. Once all prompts have been answered, the `logo.svg` file will be generated.

7. Open the `logo.svg` file in a browser to view the generated logo.

## Testing
Unit tests have been implemented to ensure the functionality of the SVG Logo Maker. To run the tests, use the following command:
```
npm test
```

## Directory Structure
The directory structure of the SVG Logo Maker project is as follows:
```
.
├── examples/           // Example SVG files created with the app
    ├──example logos are here, also where demo logo is stored
├── lib/                // Folder for classes and functions
    ├── shapes.js       // Exports Triangle, Circle, and Square classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Specifies which files and folders to ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // Project description, setup, and usage instructions
```


Good luck and happy logo-making!