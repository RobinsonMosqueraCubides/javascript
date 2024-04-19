class vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayDetails(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}
class car extends vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }
    displayDetails(){
        super.displayDetails();
        console.log(`Number of doors: ${this.doors}`);
    }
}
const myvehicle = new vehicle('ToToya', 'PradoTxl', 2024);
myvehicle.displayDetails();
const myCar = new car('Volkswagen','Polo', 2024, 5);
myCar.displayDetails();