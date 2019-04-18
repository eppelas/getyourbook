/*var testObject = { 'one': 1, 'two': 2, 'three': 3 };
console.log('typeof testObject: ' + typeof testObject);
console.log('testObject properties:');
for (var prop in testObject) {
    console.log('  ' + prop + ': ' + testObject[prop]);
}

// Put the object into storage
localStorage.setItem('testObject', testObject);

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('typeof retrievedObject: ' + typeof retrievedObject);
console.log('Value of retrievedObject: ' + retrievedObject);






Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}
*/
/*Because of short-circuit evaluation, getObject() will immediately return null if key is not in Storage. */

/*


var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));




var x = 5;

/*alert(x);*/
/*console.log(x);




var answer = 42;

typeof answer // returns number

console.log(typeof(answer));


x = "\"Do. Or do not. There is no try.\" - Yoda";

console.log(x)



var greeting = "Oh hi, " + "Mark" + "!"; // returns Oh hi, Mark!




var message = "Oh hi, ";
var firstName = "Mark";
var bam = "!";

var greeting = message + firstName + bam; // returns Oh hi, Mark!


var nope = 1 / "One"; 

console.log(typeof(nope));

x = nope / "two";


console.log(x);
console.log(typeof(x));


var beyond = 1 / 0; // returns Infinity

console.log(beyond);


var isChecked = true;

console.log(isChecked);
console.log(typeof(isChecked));



7 > 8; // returns false

/* Check if a variable is equal to a string */
/*var color = "Blue";

color === "Blue"; // returns true


console.log(color === "Blue");

console.log(7 > 8);


var empty = null;



var sym = $;
sym = Symbol();

console.log(sym);


var batman = {
  firstName: "Bruce", // string
  lastName: "Wayne", 
  location: "Gotham", 
  introduced: 1939, // number
  billionaire: true, // Boolean
  weakness: null // null
};

console.log(batman);*/

/*batman["firstName"]; */




/*var box = {
	id: "fiction",
	name: "Художественная", 
	subscriptionName: "",
	gift: true,
	subscriptionPrice: "1900"
};

var box_type = "";



console.log(box);



Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}



var box = {
	id: "fiction",
	name: "Художественная", 
	subscriptionName: "",
	gift: true,
	subscriptionPrice: "1900"
};

console.log('typeof box: ' + typeof box);
console.log('box properties:');
for (var prop in box) {
    console.log('  ' + prop + ': ' + box[prop]);
}

console.log(box.id);

// Put the object into storage
localStorage.setItem('box', box);
console.log(box);








// Retrieve the object from storage
var retrievedObject = localStorage.getItem('box.id');
console.log(retrievedObject);

console.log('typeof retrievedObject: ' + typeof retrievedObject);
console.log('Value of retrievedObject: ' + retrievedObject);
console.log(retrievedObject);

var retrievedObject = localStorage.getItem('box');

console.log(retrievedObject);






Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}
*/
/*Because of short-circuit evaluation, getObject() will immediately return null if key is not in Storage. */




/*var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));







Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}





var box = { id: "fiction",
	name: "Художественная", 
	subscriptionName: ""};

// Put the object into storage
localStorage.setItem('box', JSON.stringify(box));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('box');

/*doesnt work with box.id*/

/*console.log('retrievedObject: ', JSON.parse(retrievedObject));

console.log(retrievedObject);


var batman = {
  firstName: "Bruce",
  lastName: "Wayne", 
  secretIdentity: function() { // method
    return this.firstName + " " + this.lastName;
  }
}; 

batman.secretIdentity();
console.log(batman.secretIdentity());
console.log(batman.firstName);
console.log(retrievedObject.id);
console.log(box.id);



var ninjaTurtles = [
  "Leonardo",
  "Michelangelo",
  "Raphael",
  "Donatello"
];


ninjaTurtles.length; // returns 4

var leader = ninjaTurtles[0];*/


localStorage.clear();

localStorage.setItem('key', 'value');

var x = localStorage.getItem('key');

console.log(x);

localStorage.removeItem('key');





const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('item')


