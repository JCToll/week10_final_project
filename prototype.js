// first let’s create an object named “alien”
var alien = {
    kind: 'alien'
}
// 2nd create an object named person
var person = {
    kind: 'person'
}
// 3rd add an object named joel
var joel={}

// use _proto_ to assign alien as a prototype of joel => joel 
//  now inherits the properties of alien
joel.__proto__= alien

// test it - print out to console
console.log("joel is a: " + joel.kind ) //kind: alien

// assign person as prototype of joel
joel.__proto__= person
console.log("Joel is a : " + joel.kind)   // kind: person


