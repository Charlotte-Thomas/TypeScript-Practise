"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// inheritance 
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name, 'is dancing');
    };
    return Person;
}());
var bran = new Person('bran');
bran.dance();
var AwesomePerson = /** @class */ (function (_super) {
    __extends(AwesomePerson, _super);
    function AwesomePerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwesomePerson.prototype.dance = function () {
        console.log('so awesome');
        _super.prototype.dance.call(this); // calls originl dance func
    };
    return AwesomePerson;
}(Person));
var Jerry = new AwesomePerson('Jerry');
Jerry.dance(); // new dance function overrides Person dance func unless you use super inside
