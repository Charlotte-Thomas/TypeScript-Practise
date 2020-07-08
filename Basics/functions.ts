export { }

// by assigning types we can't pass in other types
// can add : number after the params, to state what the return type value should be (otherwise TS will infer it itself)
function add(num1: number, num2: number): number {
  return num1 + num2
}
// intellisense tells us what types are needed as we call func (and the return type)
add(5, 10)


// TS doesn't allow params to be optional when calling a func UNLESS you specify
// do this by adding ? after the param
// optional params MUST come AFTER the required ones
function subtract(num1: number, num2?: number): number {
  return num1 - num2
}
subtract(5) // the 2nd param will be treated at undefined


// default params (similar to what you normally do in JS)
function divide(num1: number, num2: number = 5): number {
  return num1 / num2
}
divide(10)



// objects

function fullName(person: { firstName: string, lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne'
}

fullName(p)

// interfaces helps us when we need to use the same address object as its parameter

interface Person {
  firstName: string,
  lastName?: string // made this optional
}

function nameAgain(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`)
}

nameAgain(p)


// classes

class Employee {
  employeeName: string
  constructor(name: string) {
    this.employeeName = name
  }

  greet() {
    console.log(`Good morning ${this.employeeName}`)
  }
}

let emp1 = new Employee('Charlotte')
console.log(emp1.employeeName)
emp1.greet()

// class inheritance 

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName)
  }
  delegateWork() {
    console.log(`Manager delegatign tasks`)
  }
}

let m1 = new Manager('Jerry')
m1.delegateWork()
m1.greet() // have access to all Employee class methods too
console.log(m1.employeeName)


// access modifiers (public, private, protected)
// public means it can be accessed anywhere outside of the class
// if you declare a class member as private it cannot be accessed outside its containing class
// cannot access the member in a derived / inherited class either - like the Manager one if private
// if you want derived classes to have access then use: protected

class Car {
  private colour: string // so can be accessed in the method below but not outside this scope
  protected type: string // can be accessed by derived classes

  constructor(colour: string, type: string) {
    this.colour = colour
    this.type = type
  }
  
  carColour() {
    console.log(`This cars colour is ${this.colour}`)
  }
}

class Volvo extends Car {
  constructor(colour: string, type: string) {
    super(colour, type)
  }
  info() {
    console.log(`Car type is ${this.type}`) // can access type
  }
}

let car1 = new Volvo('green', 'Sports')
car1.carColour()
car1.info()