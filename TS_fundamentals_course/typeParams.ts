

// want to check the param types that are being put into a function

function idenity<T>(arg: T): T { // adding <T> defines it as our type param
  return arg
}

idenity('Charlotte') // makes return type of this call a string

// this means we can call methods specific to its return type after calling this func
// e.g
idenity('Jake').substr

// can also manually specify the type being used:
idenity<number>(1)