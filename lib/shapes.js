//Triangle class creation

const { triggerAsyncId } = require("async_hooks");

class Triangle {
    constructor() {
        // Triangle properties lol
        this.color = "";
    }

setColor(color) {
    //triangle color for flair!
    this.color = color;
}

render() {
    //Generate the SVG code for the triangle with the chosen color perhaps?
    return '<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />'
    }
}

//Circle class creation
class Circle {
    constructor() {
      // Circle-specific properties
      this.color = "";
    }
  
    setColor(color) {
      // Set the color of the circle
      this.color = color;
    }
  
    render() {
      // Generate the SVG code for the circle with the chosen color
      return `<circle cx="100" cy="100" r="50" fill="${this.color}" />`;
    }
  }


//Square class creation

class Square {
    constructor() {
        // Square properties lol
        this.color = "";
    }

setColor(color) {
    //square color for flair!
    this.color = color;
}

render() {
    //Generate the SVG code for the square with the chosen color perhaps?
    return '<rect x="50" y="50" width="100" height="100" fill="${this.color}" />';
    }
}

module.exports = {Triangle, Circle, Square};



