/// <reference path="modules.ts" />
//links to modules.ts
// if you press cmd + the path it will take you to the file!
// if you press cmd + the 'Utility' or 'useful' it will take you to the specific spot in the file it exists!
// press cmd and hiver over these words and you can see how they were defined in the other file

const use = new Utility.useful()

console.log(use.timesTwo(9))


// then type in terminal: tsc util.ts modules.ts --out someOtherName.js (I called it utils.js)
// this combines the two js files and you can run node on it for the output
