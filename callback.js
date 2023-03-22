// function one(){
//     let b = function(){
//       return 2;
//     }
//   return b()
// }
// // 함수() 이렇게 쓰는 형태는 더이상 함수가 아님. -> just 실행만 하거나, 결과물이 나오거나 만 함.

// console.log(one())

// 콜백함수 자리 들어갈 함수를 같은 걸 많이 쓸 거 같으면 미리 선언하는 게 맞음.
// 하지만 그렇지 않은 경우에는 호출 시 작성이 맞음
// 콜백함수자리에 기명함수를 쓸거면 함수호출 형태가 아닌 함수이름을 쓰는 게 맞음. 아래처럼

function hoho(){
  console.log('hi')
}
root.addEventListener('click', hoho)