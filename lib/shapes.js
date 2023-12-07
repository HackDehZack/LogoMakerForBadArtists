class Triangle {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<circle cx="100" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  class Square {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };