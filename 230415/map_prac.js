const array = []

for(let i=0;i<5;i++){
  array.push(i)
}

console.log(array);

console.log(array.map((element)=>{return `${element}`}))

// const arraymap = array.map((element)=>{return `${element}`})

// console.log(arraymap)