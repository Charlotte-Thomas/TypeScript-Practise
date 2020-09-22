
// In TS you have to specify all the properties available on a class 
// on JS you don't have to do this

class Animal {
  real: boolean // instance property
  constructor() {
    this.real = true
  }
}

class Tiger {
  static family = 'cat' // static property
}

console.log(Tiger.family) // with static you can call directly from class rather than an instance of a class
// console.log(Animal.name) -- cant do this since not static 
console.log(new Animal().real) // but can do this since made an instance 


// class extensions

class Lion extends Animal{
  static family = 'cat'
  constructor(){
    super()
  }
  roar(sound: string): void {
    console.log(sound)
  }
}

const alex = new Lion 
alex.roar('brawwwr')


// class Implements
// Implements allow us to define functions in another class

class NumberGen {
  createRandom(): void {}
}

class RandomNum implements NumberGen {
  createRandom(): void {
    console.log(Math.random())
  }
}

const num = new RandomNum

num.createRandom()


// can also implement an interface 

interface NumberGen2 {
  createRandom(): number
}

class GiveNum implements NumberGen2 {
  createRandom(): number {
    return 5
  }
}

// readonly is another access modifier like public or private

class Example {
  readonly foo = 'bar' // means this value can be accessed but never changed 
}