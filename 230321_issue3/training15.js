const stringExample = "참깨빵 위에 순쇠고기 패티 두 장 특별한 소스 양상추 치즈 피클 양파까지 맛없겠다."

const splitString = (stringParams) => {
  let results = stringParams.split(" ");
  // stringParams 라는 매개변수를 띄어쓰기 기준으로 쪼개서 results에 담아 => 담은 값은 배열임.
  console.log(results)
  return results;
  // 그리고 그 값을 리턴해
}

const appendString = (stringArray, callback) => {
  // appendString이라는 함수는 매개변수에 stringArray라는 문자배열과 callback 을 담고있음.

  let body = "";
  // 일단 아무것도 없는 body를 선언

  stringArray.forEach(function(element)
  // stringArray 배열각각 함수를 실행해줘.
  {
    body = body + element;
    // body에 배열을 담는게야. => 그럼 누적되나? ==> 띄어쓰기가 사라진 문장으로 나타남.
  });
  callback(body);
  console.log(body)
  // body를 매개변수로 콜백함수 실행.
}

let bodyTemplate = "";
// 백틱으로 되어있어서 왜 백틱이지 이유가 있나 싶은데 바꿔도 차이는 없네.

let resultsCase = appendString(splitString(stringExample),function(body){
  // appendString 함수 를 resultsCase 에 담음.
  // 첫번째매개변수는 spliteString()함수고, 두번째 매개변수도 함수.
  // 두번째 매개변수 이름이 callback 임

  console.log(body);
  // 바디는 지금 띄어쓰기없는 글자

  bodyTemplate += body.substring(0, body.indexOf("티")+1);
  console.log(body.indexOf("티"))
  // 티까지의 인덱스가 10
  // 거기 +1 해서 10번째앞까지 글자를 끊음.

  console.log(bodyTemplate)
  // 그래서 bodyTemplate 결과가 참깨빵부터 패티까지만 출력됨.
})

function elementMaker(string){
  return `<div>${string}</div>`
  // 이 함수를 실행하면 문자열이 들어간 div을 만든다.
}

console.log(elementMaker(bodyTemplate))
// resultCase에서 도출된 bodyTemplate을 elementMaker에 매개변수로 넣어 실행.