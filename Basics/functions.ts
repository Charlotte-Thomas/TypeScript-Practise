export {}

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

function fullName(person: {firstName: string, lastName: string}) {
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