const sampleArray = [3, 1, 112, 23, 32, 2];
const reArray     = [];
// console.log(sampleArray);

function arrayreset() {
  let number = sampleArray[0];
  for (i = 1; i < sampleArray.length; i++) {
    if (number < sampleArray[i]) {
      reArray[i - 1] = number;
      reArray[i]     = sampleArray[i];
      number         = sampleArray[i];
      console.log(number)
    }
    else if(number > sampleArray[i]) {
      reArray[i]     = number;
      reArray[i-1]   = sampleArray[i];
      console.log(number);
    }
    // console.log(number);
    console.log(reArray);
  }
}

arrayreset();

// const resampleArray = sampleArray.filter(number=>)

// function sampleArraylist (sampleArray,callback){

//   // let array = sampleArray[0];
//   // for(i=1; i<sampleArray.length;i++){
//   //   if(array.filter( word=> word<sampleArray[i])){
//   //     array.push(sampleArray[i])
//   //   }
//   // }
// }