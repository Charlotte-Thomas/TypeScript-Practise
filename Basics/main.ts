// run: tsc main --watch 
// in terminal so any changes are auto complied into main.js

export {} //export empty brackets so that TS treats the file as a module not a script

let message = 'hello world'
console.log(message)

let isBeginner: Boolean = true
let total: number = 0
let name: string = 'Charlotte'

let sentence: string = `my name is ${name}
i am new to TypeScript`
console.log(sentence)


// TS will help by only showing intellisense related to the TYPE 
// e.g. writing name.  will give options related to string


let n: null = null
let u: undefined = undefined

// in TS null and undefined are SUBTYPES of all other types
// so can assign null / undefined to Boolean, number or string variable

let isNew: Boolean = null
let myName: string = undefined

// arrays
// both options are fine to use - it's personal preference

let array1: number[] = [1,2,3]
let array2: Array<number> = [1,2,3]

// tuples allow you to state an array of mixed types but fixed number of elements
let mixed: [string, number] = ['hello', 1]

// enums
// a way of giving friendly names to a set of numeric values

enum Color {Red = 5, Green, Blue} // auto starts at 0 unless you specify a number (I added 5)

let c: Color = Color.Green
console.log(c) // = 6