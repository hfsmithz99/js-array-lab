console.log('My app.js is being run');

/*
Exercise 1:
  - Define an empty array named foods
*/

// Exercise 1 has been completed for you...

const foods = [];

console.log('Exercise 1 Result:\n', foods);

/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
*/

// Complete Exercise 2 below...

//push allows me to add elements to an array at the end of the array
foods.push('pizza', 'cheeseburger');
console.log('Exercise 2 Result:\n', foods);
/*
Exercise 3:
  - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
*/

// Complete Exercise 3 below...

//unshift allows me to add an element to the front of an array
foods.unshift('taco');

console.log('Exercise 3 Result:\n', foods);
