"use strict";
// run: tsc main --watch 
// in terminal so any changes are auto complied into main.js
exports.__esModule = true;
var message = 'hello world';
console.log(message);
var isBeginner = true;
var total = 0;
var name = 'Charlotte';
var sentence = "my name is " + name + "\ni am new to TypeScript";
console.log(sentence);
// TS will help by only showing intellisense related to the TYPE 
// e.g. writing name.  will give options related to string
var n = null;
var u = undefined;
// in TS null and undefined are SUBTYPES of all other types
// so can assign null / undefined to Boolean, number or string variable
var isNew = null;
var myName = undefined;
// arrays
// both options are fine to use - it's personal preference
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
// tuples allow you to state an array of mixed types but fixed number of elements
var mixed = ['hello', 1];
