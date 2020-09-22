
// use overloads before functions to state what kind of params might be used in the func

type ValidSymbol = '#' | '$'

interface GenerateConfig {
  symbol: ValidSymbol,
  length: number
}


function generateRandomId(symbol: ValidSymbol, length: number): string // an overload stating one set of params
function generateRandomId(options: GenerateConfig): string // an overload stating the other set of params (a obj)
function generateRandomId(optionsOrSymbol: GenerateConfig | ValidSymbol, length?: number): string { // don't have to state the types for optionsOrSymbol here
  if (typeof optionsOrSymbol === 'string') {
    return optionsOrSymbol + Math.random().toString(36).substr(2, length)
  }
  return optionsOrSymbol.symbol + Math.random().toString(36).substr(2, optionsOrSymbol.length)
}

// I added length? to params even though tutorial didn't add this - because node wouldn't run without it
// not sure why they didn't add it, They didn't test that the js code worked

console.log(generateRandomId('#', 3))
console.log(generateRandomId({symbol: '#', length: 7}))

