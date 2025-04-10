// <-------  classes in java script    ---------->


class Rectangle {

    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }

    area() {
        return this.height * this.width;
    }

    displayColor() {
        return `the backgorund-color of this rectangle is ${this.color}`
    }

}

//create a instance of rectangle class
const newObj = new Rectangle(12,23,"red")
console.log(newObj.area())
console.log(newObj.displayColor());



// date class
const now = new Date()
console.log(now.getDate());