const six = (number, append) => {
  if (typeof (number) === 'number' && typeof (append) === 'number') {
    // 이건 타입체커 방식.
    // 번거롭게 써줘야하는 문제가 있음.
    // 나중에는 타입스크립트로 넘어가면 매개변수에서 선언해주면 되서 이 타입체커가 필요없어짐.

    return number + append;

  }

  else {
    console.error('숫자만 판단가능합니당')
  }
}
// 함수가 복잡해지지만 버그를 잡아냈다.

const a = six('number', 8);
console.log(a)

const seven = (number, append) => {
  return number - append
};
// 호출 할 때 사칙연산을 내가 하고 싶은대로 하고 싶다! 는 아래로

// callback 은 정해진 규칙.
const eight = (number, append, callback) => {
  let a = number + 2;
  let b = append + 4;
  return callback(a, b)
  // 인자를 전달받음.
  // 이러다보니 eight 은 실체가 없는 함수가 되어 버림.
  // 매개변수 자리에 함수가 들어오는 것을 콜백함수.
}

console.log(eight(1, 2, function (a, b) {
  return a + b;
}))

console.log(eight(3, 4, seven))
// 어캐 알고 얘는 a, b 가 앞에 두갠 줄 아는가?

// 위 과정을 동기방식이라 함.