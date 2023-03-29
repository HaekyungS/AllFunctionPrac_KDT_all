class User {
  constructor(order, name) {
    this.order = order;
    this.name = name;
  }
  set order(order) {
    if (typeof (order) === 'number'){
      this._order = order;
      // _ 는 검증이 끝났다는 업계문화
    }
  }
}

console.log(new User(1,"아카용"));
// 숫자로 정상적으로 들어가면 order 가 출력되고

console.log(new User("가","아카용"));
// 숫자가 아닌 값을 넣으면 order가 출력되지 않는다.
// set 은 부가옵션 느낌인가? 추가옵션?

// 생성자 함수와 new 는 한 set 느낌.
// new 를 붙여야 사용이 가능하네