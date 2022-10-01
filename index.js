"use strict";

const l = console.log;

// # Javascript Assignment 8

// 1. Can we put duplicate values in the set object ?

// Answer
// =>

// No

// 2. Write the syntax for
// a) Creating new set object
// b) Adding new element to set object
// c) Deleting element from set object

// Answer
// =>

const setObj = new Set();
setObj.add("new Element One");
setObj.add("new Element Two");
setObj.add("new Element Three");

setObj.delete("new Element Three");

// Output :

l(setObj);

// 3. Create a set object with four random numbers from 0 to 10. Check if this
// newly created set object has 8 in it. Use set object methods.

// Answer
// =>

const setObjTwo = new Set();
for (let i = 0; i < 4; i++) {
  const randomNumber = Math.ceil(Math.random(10) * 10);
  if (setObjTwo.has(randomNumber)) {
    i--;
  }
  setObjTwo.add(randomNumber);
}

// Output :

l(setObjTwo.has(8));
l(setObjTwo);
