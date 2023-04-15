const exampleArray = [5, 2, 7, 3, 9, 324, 66, 43];
// 배열이 있다.

function minValue(array, callback) {
  // minValue 라는 함수를 선언하는데 첫번째매개변수는 배열, 두번째매개변수는 callback 이다.

  let min = array[0];
  // min이라는 변수를 선언하고 걔는 배열의 0번째 수를 담는다.

  console.log(min)
  // 확인 결과값 : 5

  for (let i = 1; i < array.length; i++) {
    // 반복문을 배열의 길이만큼 한다.

    if (array[i] < min) {
      // 만약 array[i]번째가 min보다 작으면

      min = array[i];
      // min에 array[i] 로 넣어줘. (바꾸는게야)

      console.log(min)
      // 콘솔 확인 결과값 : 2
    }
  }
  return callback(min);
  // callback 함수 결과값으로 리턴해.
}

const minValueExample = minValue(exampleArray, function (result) {
  // minValueExample이라는 변수를 선언하고 걔 안엔 minValue() 함수를 실행한다.
  // 첫번째 변수는 배열, 두번째 변수는 함수인데 result 에 min 이 드가니까 function(3) 이랑 같음
  console.log(result)
  // 콘솔확인. 결과값 2

  return result * 2;
  // 3*2로 값을 리턴해라.
})

console.log(minValueExample)
// 콘솔 확인. minValueExample 은 4 임.