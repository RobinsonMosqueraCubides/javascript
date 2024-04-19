class Shape {
    constructor() {
        this.message();
    }
    message(){
        console.log("This method should be implemented by subclass");
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    calculateArea(){
        console.log(`The area of the circle is ${3.14*(this.radius)^2}`);
    }
}
class Triangle extends Shape{
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }
    calculateArea(){
        console.log(`The area of the triangle is ${this.base * this.height / 2}`);
    }
}

const circle = new Circle(7);
circle.calculateArea();
const triangle = new Triangle(5, 3);
triangle.calculateArea();