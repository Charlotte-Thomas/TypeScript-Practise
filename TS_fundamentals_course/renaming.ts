
// TS allows a way for us to rename classes/modules (and possibly other features) across all files where its been imported 

export class Animal {
  legs: number
}

// all you have tyo do is right click the name (wherever it may exist not just where it's exported)
// click: rename symbol 
// this will now change it everywhere!
// it will NOT change words that are the same spelling only the actual class
// e.g.
const noChange = 'Animal' // - this text won't chnage 