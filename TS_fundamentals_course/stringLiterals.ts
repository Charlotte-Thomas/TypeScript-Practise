
// if you want a type to only be one specific thing then use string literal types
// e.g. 
const symbol: '#' = '#'

// but by just using const, ts will infer that it can only be this symbol anyway!

const symbol2: '#' | '$' = '$'  // union of types, allowing a variety of different values


type ValidSymbol = '#' | '$' // can also turn it into a type alias 
// useful if referencing these types in mutiple places

const symbol3: ValidSymbol = '#'