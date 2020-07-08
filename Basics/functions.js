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
// by assigning types we can't pass in other types
// can add : number after the params, to state what the return type value should be (otherwise TS will infer it itself)
function add(num1, num2) {
    return num1 + num2;
}
// intellisense tells us what types are needed as we call func (and the return type)
add(5, 10);
// TS doesn't allow params to be optional when calling a func UNLESS you specify
// do this by adding ? after the param
// optional params MUST come AFTER the required ones
function subtract(num1, num2) {
    return num1 - num2;
}
subtract(5); // the 2nd param will be treated at undefined
// default params (similar to what you normally do in JS)
function divide(num1, num2) {
    if (num2 === void 0) { num2 = 5; }
    return num1 / num2;
}
divide(10);
// objects
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
function nameAgain(person) {
    console.log(person.firstName + " " + person.lastName);
}
nameAgain(p);
// classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Charlotte');
console.log(emp1.employeeName);
emp1.greet();
// class inheritance 
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegatign tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Jerry');
m1.delegateWork();
m1.greet(); // have access to all Employee class methods too
console.log(m1.employeeName);
// access modifiers (public, private, protected)
// public means it can be accessed anywhere outside of the class
// if you declare a class member as private it cannot be accessed outside its containing class
// cannot access the member in a derived / inherited class either - like the Manager one if private
// if you want derived classes to have access then use: protected
var Car = /** @class */ (function () {
    function Car(colour, type) {
        this.colour = colour;
        this.type = type;
    }
    Car.prototype.carColour = function () {
        console.log("This cars colour is " + this.colour);
    };
    return Car;
}());
var Volvo = /** @class */ (function (_super) {
    __extends(Volvo, _super);
    function Volvo(colour, type) {
        return _super.call(this, colour, type) || this;
    }
    Volvo.prototype.info = function () {
        console.log("Car type is " + this.type); // can access type
    };
    return Volvo;
}(Car));
var car1 = new Volvo('green', 'Sports');
car1.carColour();
car1.info();
