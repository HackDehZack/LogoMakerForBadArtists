const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('render method should return the correct SVG code with the chosen color', () => {
    const triangle = new Triangle();
    triangle.setColor('red');

    const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="red" />';
    const renderedSvg = triangle.render();

    expect(renderedSvg).toBe(expectedSvg);
  });
});

describe('Circle', () => {
  test('render method should return the correct SVG code with the chosen color', () => {
    const circle = new Circle();
    circle.setColor('blue');

    const expectedSvg = '<circle cx="100" cy="100" r="50" fill="blue" />';
    const renderedSvg = circle.render();

    expect(renderedSvg).toBe(expectedSvg);
  });
});

describe('Square', () => {
  test('render method should return the correct SVG code with the chosen color', () => {
    const square = new Square();
    square.setColor('green');

    const expectedSvg = '<rect x="50" y="50" width="100" height="100" fill="green" />';
    const renderedSvg = square.render();

    expect(renderedSvg).toBe(expectedSvg);
  });
});