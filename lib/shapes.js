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

