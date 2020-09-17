export { }

console.log('hello world')

function hello(str: string) {
  console.log('hello' + str)
}

hello('charlotte');


enum Names {'John', 'Beth', 'Mary'}
const hasLamb: Names = Names.Mary
console.log(hasLamb)

//use void as defined return type if a function doesn't return anything
function getName(): void {
  console.log('i have no return')
}

