"use strict";
exports.__esModule = true;
console.log('hello world');
function hello(str) {
    console.log('hello ' + str);
}
hello('charlotte');
var Names;
(function (Names) {
    Names[Names["John"] = 0] = "John";
    Names[Names["Beth"] = 1] = "Beth";
    Names[Names["Mary"] = 2] = "Mary";
})(Names || (Names = {}));
var hasLamb = Names.Mary;
console.log(hasLamb);
//use void as defined return type if a function doesn't return anything
function getName() {
    console.log('i have no return');
}
function printName(stark) {
    console.log(stark.name);
}
printName({ name: 'Arya' });
//printName({label: 'Jon'}) --- this throwså an error but without interface it wouldn't have thrown onw
// classes 
var Fruit = /** @class */ (function () {
    function Fruit(desc) {
        this.fruits = true; // this is a default propery 
        this.description = desc;
        this.location = Fruit.bowl; // can use static values like this
    }
    Fruit.prototype.hello = function (fruity) {
        console.log('hello ' + fruity);
    };
    Fruit.bowl = 'kitchen';
    return Fruit;
}());
var apple = new Fruit('don\'t eat if given by witch');
console.log(Fruit.bowl); // can only access static values from the class itself this way
apple.hello('apple');
