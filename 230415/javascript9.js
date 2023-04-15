const oneInnerFunc=(message)=>{
  console.log(message)
}

const one = (message) =>{
  oneInnerFunc(message)
}

one("첫번째야")

const two = (message, callback)=>{
  callback(message)
}

two("두번째야",(message)=>{
console.log(message);
})
