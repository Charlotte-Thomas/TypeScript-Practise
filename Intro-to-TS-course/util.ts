/// <reference path="modules.ts" />
//links to modules.ts

const use = new Utility.useful()

console.log(use.timesTwo(9))


// then type in terminal: tsc util.ts modules.ts --out someOtherName.js (I called it utils.js)
// this combines the two js files and you can run node on it for the output
