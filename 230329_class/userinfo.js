import fs from 'fs';

function User(id, pass, email) {
  this.id = id;
  this.password = pass;
  this.email = email;
}

const d = new User('idd', 'passs', 'e@e.com');
const e = new User('test', 'root', 'b@b.com');
const f = new User('fff', 'rfft', 'f@f.com');

let names = ['idd', 'test', 'fff'];
let passwords = ['passs', 'root', 'rffr'];
let emails = ['e@e.com', 'b@b.com', 'f@f.com'];

// console.log(d,e,f);

let members = [];
for (let i = 0; i < 3; i++) {
  members.push(new User(names[i], passwords[i], emails[i]));
}

// fs.writeFileSync('members.JSON', JSON.stringify(members), 'utf-8');
// 한줄로 따닥따닥 붙어서 나옴
fs.writeFileSync('members.JSON', JSON.stringify(members, null, 2), 'utf-8');
// 깔끔하게 package.json 파일처럼 나옴

console.dir(members);

// DB에서 데이터를 끌고 오는 것 -> sql 처리
// 끌고 온 데이터 전송 -> json

// 생성자 함수(constructor function)
// -> 객체를 찍어내는 함수
// -> 객체가 너무 많이 필요하고, 한번에 모든 객체를 만들기 위해 사용.