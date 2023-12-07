const fs = require('fs');

function generateLogo(text, textColor, shape, shapeColor) {
  const svgWidth = 300;
  const svgHeight = 200;

  let shapeMarkup;

  switch (shape) {
    case 'Triangle':
      shapeMarkup = generateTriangleMarkup(svgWidth, svgHeight);
      break;
    case 'Circle':
      shapeMarkup = generateCircleMarkup(svgWidth, svgHeight);
      break;
    case 'Square':
      shapeMarkup = generateSquareMarkup(svgWidth, svgHeight);
      break;
    default:
      throw new Error('Invalid shape provided');
  }

  function generateTriangleMarkup(svgWidth, svgHeight) {
    const points = `${svgWidth / 2},${svgHeight / 2 - 82} ${svgWidth / 2 - 70},${svgHeight / 2 + 82} ${svgWidth / 2 + 70},${svgHeight / 2 + 82}`;
    return `<polygon points="${points}" fill="${shapeColor}" />`;
  }

  function generateCircleMarkup(svgWidth, svgHeight) {
    const cx = svgWidth / 2;
    const cy = svgHeight / 2;
    const r = 50;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${shapeColor}" />`;
  }

  function generateSquareMarkup(svgWidth, svgHeight) {
    const x = svgWidth / 2 - 50;
    const y = svgHeight / 2 - 50;
    const width = 100;
    const height = 100;
    return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${shapeColor}" />`;
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

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
      ${shapeMarkup}
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