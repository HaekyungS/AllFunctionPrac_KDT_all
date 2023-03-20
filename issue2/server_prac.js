import fs from 'fs';
import http from 'http';
// import createDoc from 'createDoc.js';

const httphead = fs.readFileSync('index_01.text');
const httptail = fs.readFileSync('index_02.text');
const form = fs.readFileSync('index_03.text');

// const formprop = {
//   method : 'POST',
//   action : '/file'
// }

// const inputprop = {
//   type : 'text'
// }

const server = http.createServer(function (request, response) {
  // 서버를 만듦
  if (request.method === "GET" && request.url === "/") {
    // 요청이 GET 이고, url 이 / 이면 실행해
    response.writeHead(200, { 'Content-Type': 'text/html' });
    // status는 200 이고, type은 text.html.
    response.write(httphead + form + httptail);
    // 위에 만들었던 애들 조합으로 html을 조합.
    response.end();
    // 반응 끝~
  }
  if (request.method === "POST" && request.url.startsWith("/file")) {
    // 요청이 POST 이고, url시작에 /file이 함께 있을 경우
    let a = "";
    // 빈 변수를 하나 선언
    request.on("data", (data) => {
      // 요청이 켜지고, 데이터받으면, 콜백함수 실행
      a += data;
      // a 변수에 data 담기
      // console.log(data)
    })
    request.on("end", () => {
      // 요청이 끝날 때,
      let fileName = a.split("=")[1].split("&")[0];
      // a변수 데이터 중 두번째 = 뒤면서 첫번째&까지만 filename에 담기
      let fileInText = a.split("=")[2];
      // a변수 데이터 중 세번째 = 뒤
      writeFileSync("./" + fileName + ".text", fileInText);
      // 그 이름과 내용으로 파일 생성
      response.writeHead(200, { 'Content-Type': 'text/html' });
      // status는 200 이고, type은 text.html.
      const page = httphead + form + `<p> ${fileName} 이름의 파일이 생성되었습니다. 파일 내에는 ${fileInText} 입니다.</p>` + httptail;
      // PAGE 라는 변수에 html 생긴거 담기.
      // response.write(a)
      response.write(page);
      // 새기기.
      // 기존데이터를 지워주고 새로새긴다는 절차가 필요함.
      // BOM API의 "히스토리"를 건드려야함.=> 따로 검증을 해보기.
      // mount, unmount 
      response.end();
      // 반응 끝~
    })
  }
})

server.listen(2080);