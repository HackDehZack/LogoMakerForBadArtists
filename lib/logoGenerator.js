const fs = require('fs');
const { Triangle, Circle, Square } = require('./shapes');

function generateLogo(text, textColor, shape, shapeColor) {
  const svgWidth = 300;
  const svgHeight = 200;

  let shapeInstance;
  switch (shape) {
    case 'Triangle':
      shapeInstance = new Triangle();
      break;
    case 'Circle':
      shapeInstance = new Circle();
      break;
    case 'Square':
      shapeInstance = new Square();
      break;
    default:
      throw new Error('Invalid shape provided');
  }

  shapeInstance.setColor(shapeColor);
  const shapeMarkup = shapeInstance.render();

  function getShapeMarkup(shape, color, svgWidth, svgHeight) {
    const shapeAttributes = {
      Circle: `cx="${svgWidth / 2}" cy="${svgHeight / 2}" r="50"`,
      Square: `x="${svgWidth / 2 - 50}" y="${svgHeight / 2 - 50}" width="100" height="100"`,
      Triangle: `points="${svgWidth / 2},${svgHeight / 2 - 82} ${svgWidth / 2 - 70},${svgHeight / 2 + 82} ${svgWidth / 2 + 70},${svgHeight / 2 + 82}"`,
    };

    return `<${shape} ${shapeAttributes[shape]} fill="${color}" />`;
  }

  function getTextMarkup(text, textColor, svgWidth, svgHeight) {
    const fontSize = 24;
    const textX = svgWidth / 2;
    const textY = svgHeight / 2;

    return `
      <text x="${textX}" y="${textY}" fill="${textColor}" font-size="${fontSize}" text-anchor="middle" dominant-baseline="middle">
        ${text}
      </text>
    `;
  }

  let svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
      ${getShapeMarkup(shape, shapeColor, svgWidth, svgHeight)}
      ${getTextMarkup(text, textColor, svgWidth, svgHeight)}
    </svg>
  `;

  return svg; // Return the generated SVG
}

function saveLogoToFile(logo) {
  fs.writeFileSync('logo.svg', logo);
  console.log('Logo saved to logo.svg');
}

module.exports = {
  generateLogo,
  saveLogoToFile,
};