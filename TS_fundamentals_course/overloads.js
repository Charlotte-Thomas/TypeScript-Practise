// use overloads before functions to state what kind of params might be used in the func
function generateRandomId(optionsOrSymbol, length) {
    if (typeof optionsOrSymbol === 'string') {
        return optionsOrSymbol + Math.random().toString(36).substr(2, length);
    }
    return optionsOrSymbol.symbol + Math.random().toString(36).substr(2, optionsOrSymbol.length);
}
// I added length? to params even though tutorial didn't add this - because node wouldn't run without it
// not sure why they didn't add it, They didn't test that the js code worked
console.log(generateRandomId('#', 3));
console.log(generateRandomId({ symbol: '#', length: 7 }));
