import fs, { unlink, writeFileSync } from 'fs';
import http from 'http';
// import DivClickFileDelete from './callback.js';
// import event from 'events';
// import DivClickFileDelete from '../issue2/callback.js';
// import createDoc from 'createDoc.js';

const httphead = fs.readFileSync('index_01.text');
const httptail = fs.readFileSync('index_02.text');
const form = fs.readFileSync('index_03.text');
const formDelete = fs.readFileSync('form_delete.text');
let fileName=""

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

    console.log('서버 정상 작동중 입니다, 아마?')

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
      fileName = a.split("=")[1].split("&")[0];
      // a변수 데이터 중 두번째 = 뒤면서 첫번째&까지만 filename에 담기
      let fileInText = a.split("=")[2];
      // a변수 데이터 중 세번째 = 뒤
      writeFileSync("./" + fileName + ".text", fileInText);
      // 그 이름과 내용으로 파일 생성
      response.writeHead(200, { 'Content-Type': 'text/html' });

      const page = httphead + formDelete + `${fileName} 이름의 파일이 생성되었습니다. </br> 파일 내에는 ${fileInText} 입니다.</p>` + httptail;
      // status는 200 이고, type은 text.html.
      // PAGE 라는 변수에 html 생긴거 담기.
      // response.write(a)
      response.write(page);


      console.log(page)

      // const DivClickFileDelete = () => {
      //   fs.unlinkSync('./' + fileName + '.text');
      // }

      // div.on('click', (fileName) => {
      //   fs.unlinkSync('./' + fileName + '.text');
      // })

      // 새기기.

      response.end();
      // 반응 끝~
    })
  }
  if (request.method === "GET" && request.url.startsWith("/file")) {
    fs.unlinkSync('./' + fileName + '.text');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    const page = httphead + '<p>' + fileName + ' 이름의 파일이 삭제되었습니다.</p>' + httptail
    response.write(page);
    response.end();    

  }
})

server.listen(2080);
