
// since there's no way to progress to a return value - you can use the return type of never 
function userAlert(): never {
  throw new Error('fail')
} 

// you can also use it for infinite loops - since can never get past the loop as it doesn't end
function loop(): never {
  while (true){
    console.log('never end')
  }
}

// if it does end but has no return value then you use void instead 

// by adding ? after a param you are saying its a union type of one type AND undefined (so could pass in nothing)
function undef(optional?: string): void {
  optional = optional || 'default value' // give it a default value if its undefined (can also do it within parmas bit)
  console.log(optional)
}

// note don't need ? in params if you give it default value in parmas bit 