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