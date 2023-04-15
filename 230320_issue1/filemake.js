import fs from 'fs';

let name = 'haekyungs';
let date = new Date();
// new Date 는 내장 라이브러리 (시간)
// let filename = date.getFullYear()+name;
// getFullYear는 날짜 중 연도에 해당하는 것을 갖고옴.
let filename = date.getSeconds()+name;
// 초당으로

fs.writeFileSync('./'+filename+'.text',date+'에 만든 파일입니당')
// 파일을 동기방식으로 쓰다.
// (파일경로랑이름, 안에 들어갈 데이터)

