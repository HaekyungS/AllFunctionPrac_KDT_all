const studentList = [
  "강지민",
  "곽윤호",
  "권예준",
  "김동주",
  "김은아",
  "김종윤",
  "김지섭",
  "김형진",
  "노수민",
  "류은이",
  "박달재",
  "박수연",
  "박준형",
  "성해경",
  "이경택",
  "이세민",
  "이재권",
  "임지성",
  "장루빈",
  "정성철",
  "정지은",
  "정희은",
  "최대건",
  "한유진",
  "허진",
];

function searching(array, name){
  for(let i = 0; i<array.length; i++){
    if(array[i] === name){
      console.log(`${name}씨는 ${i}번째 학생입니다.`)
    }else{
      console.log(`${i}번째는 ${name}씨가 아닙니다.`)
    }
  }
}

searching(studentList,"성해경");