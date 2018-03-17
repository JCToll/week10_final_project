// start with the Auto constructor 
function Auto(make, model, year, color, price) {
    this.make= make;
    this.model= model;
    this.year= year;
    this.color= color;
    this.price= price;
}

// let's start by adding a property named category to the Auto prototype
    Auto.prototype.category = "car";

// define a property named age and method to the Auto prototpye    
    Auto.prototype.age = function() {
	if (this.year < 2015) {
	    console.log("The " + this.make + " " + this.model + " year is " +  this.year + ".  This is an older car");
	} else {
	    console.log("The " + this.make + " " +  this.model + " year is " +  this.year + ".  This is a newer car");
	}
};

// define a property named expensive and method to the Auto prototpye    
    Auto.prototype.expensive = function() {
	if (this.price < 50000) {
	    console.log("The price of the " + this.make + " " +  this.model + " is $" +  this.price + ". This is inexpensive");
	} else {
	    console.log("The price of the " + this.make + " " +  this.model + " is $" +  this.price + ". This is EXPENSIVE!");
	}
};

    Auto.prototype.exterior= function(){
	console.log("The color is: " + this.color);
    };

// create the data base of cars  
	var autoJoel = new Auto("Subaru", "Outback", 2016, "white", 32000);
	var autoMary = new Auto("Honda", "Civic", 2009, "silver", 20000);
	var autoJohn = new Auto("Tesla", "S9", 2018, "red", 60000);


// now call the methods for each car;  each car inherits the methods from the Auto prototype
    autoJoel.age();
    autoJoel.expensive();
    autoJoel.exterior();
    
    autoMary.age();
    autoMary.expensive();
    autoMary.exterior();
    
    autoJohn.age();
    autoJohn.expensive();
    autoJohn.exterior();    

