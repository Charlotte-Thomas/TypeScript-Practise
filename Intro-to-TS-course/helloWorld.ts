export { }

console.log('hello world')

function hello(str: string) {
  console.log('hello ' + str)
}

hello('charlotte');


enum Names {'John', 'Beth', 'Mary'}
const hasLamb: Names = Names.Mary
console.log(hasLamb)

//use void as defined return type if a function doesn't return anything
function getName(): void {
  console.log('i have no return')
}

// interfaces

interface Stark {
  name: string,
  age?: number // without ? this param would be required
}

function printName(stark: Stark) {
  console.log(stark.name)
}

printName({name: 'Arya'})
//printName({label: 'Jon'}) --- this throwså an error but without interface it wouldn't have thrown onw


// classes 

class Fruit {
  fruits: boolean = true // this is a default propery 
  static bowl: string = 'kitchen'
  name: string
  location: string
  description: string
  constructor(desc: string){
    this.description = desc
    this.location = Fruit.bowl // can use static values like this
  }

  hello(fruity: string) {
    console.log('hello ' + fruity)
  }
}

const apple = new Fruit('don\'t eat if given by witch')

console.log(Fruit.bowl) // can only access static values from the class itself this way

apple.hello('apple')


// inheritance 

class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  dance() {
    console.log(this.name, 'is dancing')
  }
}

const bran = new Person('bran')

bran.dance()


class AwesomePerson extends Person {
  dance() {
    console.log('so awesome')
    super.dance() // calls originl dance func
  }
}

const Jerry = new AwesomePerson('Jerry')

Jerry.dance() // new dance function overrides Person dance func unless you use super inside