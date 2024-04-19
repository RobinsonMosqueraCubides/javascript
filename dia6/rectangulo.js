class rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    areaPerimeter(){
        console.log(`The perimeter of the rectangle is ${this.width * 2 + this.height * 2} and area is ${this.width * this.height}`);
    }
}

const rectangle1 = new rectangle(10, 20);
rectangle1.areaPerimeter();