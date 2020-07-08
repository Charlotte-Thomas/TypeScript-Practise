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
// enums
// a way of giving friendly names to a set of numeric values
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {})); // auto starts at 0 unless you specify a number (I added 5)
var c = Color.Green;
console.log(c); // = 6
// any type
// allows you to access functions / properties on the value even if it's not of the correct type without throwing errors (until runtime)
var randomValue = 10;
randomValue = true;
randomValue = 'Charlotte';
// unknown type
// similar to any type but can't access properties off this type or call them
// have to assert the type before doing so
var unknownVal = 'hi'; // have to add ; here
unknownVal.toUpperCase();
console.log(unknownVal);
// TS type inference 
var a; // can now assign any type value after this
a = true;
a = 'string';
var b = 10; // TS infers that this is a number type so cannot reassign to a differnt type
// union of types for same variable
// useful if a value is not under your control e.g. from API
// useful for intellisense support
var multiType;
multiType = true;
multiType = 20;
