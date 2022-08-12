//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {

        super(make, model, year, color, mileage);
        
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadpassengers (num){
        if (this.passenger < this.maxPassengers) {
            this.passenger = num;
            return this.passenger;
        }
        else {
            console.log ("This vehicle is at max capacity");
        }
    }

    start () {
        if (this.fuel > 0) {
            return this.start == true;
        }
        else {
            console.log ("This vehicle is out of fuel and cannot start");
        }
    }
    

    scheduleService (mileage) {
        if (this.mileage += 10000){
            this.scheduleService = true;
            return this.scheduleService;
        }
        else 
            console.log ("No service is needed at this time")
    }




//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
