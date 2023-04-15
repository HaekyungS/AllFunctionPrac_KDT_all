function one(){
  return 1;
}

function twoReturnString(){
  return '1';
}
// 함수 호출이나 함수 내부를 보기 전까진 데이터타입을 모르니 함수이름에 직관적으로 써줌.

two() === '1';


// 함수 이름 앞에 is 가 있으면 불리언이라는 암묵적인 룰.
function isthree(){
  return true;
}


function four(){
  return {
    a: 1,
    b: '2',
    c: true
  }
}
// return 이 객체.

function five(){
  let a = 1+1;
} 
// return void (회피하다.) = return zero
// 오직 실행만 하는 함수. = 실행함수
// 대표적인게 for문
// 내가 필요할 때 동작을 하는 목적만 있음.

