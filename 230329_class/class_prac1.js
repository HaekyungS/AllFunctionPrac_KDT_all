// const a = new Date();
// console.log(a);
// console.log(a.getFullYear());

// const b = {
//   year : 2023,
//   month : 3,
//   date : 29
// };
// console.log(b.year +"년"+ b.month +"월"+ b.date+"일");

// 위에 객체로 만들어 하는 것과 밑에 함수로 만드는 것 둘다 동일함.
// 차이점은 아래 함수는 호출 시 작성하여 변경이 가능하단 점.

// function c(years, months, dates) {
//   return {
//     year: years,
//     month: months,
//     day: dates
//   }
// }

// const test = c(2023, 3, 29).year;
// console.log(test);

// function c(a, b, c) {
//   this.year = a;
//   this.month = b;
//   this.day = c;
// }

// const test = c(2023, 3, 29).year;
// console.log(test);
// 이건 에러가 남. 에러멘트 cannot set properties of undefined ( setting 'year') at c

function User(id, pass, email){
  this.id = id;
  this.password = pass;
  this.email = email;
}

const d = new User('Haekyung','rororo','haekyung@gmail.com');
console.log(d)
// 객체가 생성됨.
