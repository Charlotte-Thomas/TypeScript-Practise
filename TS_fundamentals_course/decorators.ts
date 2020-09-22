// decorator factories

function Component(options) {
  console.log(options)
  return (target) => console.log(target)
  // target refers to the target class
}

@Component('some value')
class Example { // i don't have a config but this would be easy to add 
  example: string
}


function decorator() {
  return 1
}

function prop(x, name) { // takes two params - 1. prototype of the class (if instance property) 2. name of param
  console.log(x, name)

}

class NewExample {
  @decorator() // not explained in tutorial - need to look this up
  test(num: number): number {
      return num + 1
  }

  @prop item: string
}