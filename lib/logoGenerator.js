const fs = require('fs');

function generateLogo(text, textColor, shape, shapeColor) {
  const svgWidth = 300;
  const svgHeight = 200;

  let svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
      ${getShapeMarkup(shape, shapeColor, svgWidth, svgHeight)}
      ${getTextMarkup(text, textColor, svgWidth, svgHeight)}
    </svg>
  `;

  return svg; // Return the generated SVG
}

function getShapeMarkup(shape, color, svgWidth, svgHeight) {
  const shapeAttributes = {
    circle: `cx="${svgWidth / 2}" cy="${svgHeight / 2}" r="50"`,
    square: `x="${svgWidth / 2 - 50}" y="${svgHeight / 2 - 50}" width="100" height="100"`,
    triangle: `points="${svgWidth / 2},${svgHeight / 2 - 50} ${svgWidth / 2 - 50},${svgHeight / 2 + 50} ${svgWidth / 2 + 50},${svgHeight / 2 + 50}"`,
  };

  return `<${shape} ${shapeAttributes[shape.toLowerCase()]} fill="${color}" />`;
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

function saveLogoToFile(logo) {
  fs.writeFileSync('logo.svg', logo);
  console.log('Logo saved to logo.svg');
}

module.exports = {
  generateLogo,
  saveLogoToFile,
};