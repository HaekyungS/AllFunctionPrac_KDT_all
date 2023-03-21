const one = (first, second, callback)=>{
  // one 이라는 함수는 3개의 매개변수를 가졌고 마지막 매개변수는 콜백이다.

  let addResult = first + second;
  // addResult 라는 변수를 선언하고, 해당 변수는 첫번째와 두번째 매개변수의 합이다.

  console.log(addResult)
  // 어떤 값인지 확인 결과값 : 3

  return callback(addResult);
  // 리턴은 callback() 함수인데, 해당 함수의 매개변수는 addResult 이다.
}
console.log(one)
// one 은 함수임.

const oneCallback = one(1,2,function(result){
  // 변수 oneCallback를 선언해서 one함수를 담음
  
  let callbackResult = result * 2;
  // callbackResult라는 변수를 선언해서 result*2를 담음

  console.log(callbackResult)
  // 콘솔 확인 결과값 : 6

  return callbackResult;
  // callbackResult를 리턴
})

console.log(oneCallback);
// oneCallback 콘솔 확인. 결과값 : 6