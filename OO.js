// Part One
// Create a class for vehicle. Each vehicle instance should have the following properties:

// make
// model
// year

// Each vehicle instance should have access to a method called honk, which returns the string “Beep.”
// Each vehicle instance should have a method called toString, which returns the string containing the make, model and year.

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }  
    honk() {
        console.log('BEEP!');
    }
    toString() {
        console.log(`The vehicle is a ${this.make} ${this.model} form ${this.year}.`);
    }
}

// Part Two
// Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4.

class Car extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 4;
    }
  }

// Part Three
// Create a class for a Motorcycle. This class should inherit from Vehicle and each motorcycle instance should have a property called numWheels which has a value of 2. It should also have a revEngine method which returns “VROOM!!!”

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        console.log("VROOOOM!!!");
    }
}

// Part Four
// Create a class for a Garage. It should have a property called vehicles which will store an array of vehicles, and a property called capacity which is a number indicating how many vehicles will fit in the garage. When you create a garage, vehicles will always be empty; you only need to provide the capacity.

// A garage should also have an add method, which attempts to add a vehicle to the array of vehicles. However, if you try to add something which is not a vehicle, the garage should return the message “Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”


class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity
    }
    //looked at solution to figure out add 
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {  //instanceOf returns a boolean value
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}