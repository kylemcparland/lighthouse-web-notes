# Kyle McParland's Notes
## Summary

This repository contains all of the notes taken by [Kyle McParland](https://github.com/kylemcparland) for the Lighthouse Labs Web Development Bootcamp.

## Table of Contents
- [Week 1](/Week_1/)
  - [Day 1](/Week_1/Day_1/)

//// Unsorted:

github process:
git add README.md
git commit -m "Description"
git push -u origin main

# David H 
## Week 1: L2 - The Dev Workflow
"If you're getting new errors, you're making progress."

Logic: What have I told the computer exactly to do?
Syntax: Am I missing a curly brace?
Data: Do I have the data I think I do in the format I expect?

Typical research path: 
**Google** the error message/what you want to accomplish + the programming language
**StackOverFlow** is usful for seeing multiple possible solutions to a problem (do NOT copy and paste)
**Mozilla Developer Network** ...read the documentation (90% of what you want to know is on MDN) (W3schools is an alternative in a more beginner friendly language)

Write your code as if the next person who has to read it is a homocidal maniac who has your address.

# Alvin Ng
## Week 2: L1 - Objects / Primitive Values

### Primitive Values

VAR saves the variable name before the variable assignment itself
- VAR gets hoisted into the global scope (which is bad)

Primitives are saved into memory

- Numbers (NaN is technically a number)
- Strings
- Boolean
- Undefined - no value assigned. Message for the developer.
- Null - Nothing BUT it's a nothing given to us by a developer. Javascript will never return this
//
- BigInt
- Symbols

### Objects
- Array
- Object
- Functions

The vast majority of the time you're going to use the .dot notation.
- Unless, similarly it has a number first. In which case you have to wrap it in square brackets.
- OR if your argument (name of the key) is assigned to a variable. 

TypeError: Cannot read variable of undefined 
(means it's trying to find a value INSIDE of undefined. AKA look one step behind what you just did)

Whenever you make an object you always use CONST
- It will always be an object, you are just now free to add/remove keys/values into it

When you create a "copy" of an object using obj2 = obj1, you are NOT creating a copy, you're creating a pointer.
- Same thing applies to arrays

"this" means myself, surrounding me one level above. Like if you were to point to a key in the object you're in, you can do ${this.info.km} and it will always point to the object you're in, no matter how many objects deep you are.

for.. of only works for ARRAYS
for.. in works in ARRAYS as well, but loops over its zero-based position instead of its value

is the reason why . doesn't work because it's looking for a key NAMED key?

Array.isArray() = [].isArray()

## Ternary operator:

const isItRaining = function(weather) {
return weather === "raining" ? "Stay inside" : "Go outside"
// return argument === "raining" ? Truthy statement : Falsy statement
}

# David H
## Week 2: L2 - Callbacks & Anonymous functions

**Function declarations** are hoisted to the top of the code
function sayHello() {};

**Function expressions** cannot
const sayHello2 = function() {};

Any object can be console logged:
console.log(sayHello.toString())
//Displays complete contents of object

**.forEach** is essentially just a for.. loop which accepts a function to do each loop (over an array specifically)

# Alvin Ng
## Week 3: L1 - 

A test will define what the function is supposed to do and then demonstrate it.

Tests are all kept in a separate file.

Fundamentally all tests are (actual === expected)
const actual = sayHello('John);
const expected = sayHello('John);

When a file is require() in another file, the entire required file is executed 

npm install <name of package>
npm install --save-dev <name of package> (only installs on dev and testing mode, won't export)
- See: "dev dependencies" in the JSON file
npm install --global <name of package> (installs into operating system)

## Mocha
"describe" holds a series of "it" tests
"it" runs a single test

TDD - Test Driven Development
You write the test FIRST!!!!