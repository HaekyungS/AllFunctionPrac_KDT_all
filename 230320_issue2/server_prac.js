import fs, { unlink, writeFileSync } from 'fs';
import http from 'http';
import DivClickFileDelete from './callback.js';
// import event from 'events';
// import DivClickFileDelete from '../issue2/callback.js';
// import createDoc from 'createDoc.js';

const httphead = fs.readFileSync('index_01.text');
const httptail = fs.readFileSync('index_02.text');
const form = fs.readFileSync('index_03.text');
// const div = fs.readFileSync('div.text');

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
      let fileName = a.split("=")[1].split("&")[0];
      // a변수 데이터 중 두번째 = 뒤면서 첫번째&까지만 filename에 담기
      let fileInText = a.split("=")[2];
      // a변수 데이터 중 세번째 = 뒤
      writeFileSync("./" + fileName + ".text", fileInText);
      // 그 이름과 내용으로 파일 생성
      response.writeHead(200, { 'Content-Type': 'text/html' });

      const page = httphead + `<div> 파일삭제 </div> <p> ${fileName} 이름의 파일이 생성되었습니다. </br> 파일 내에는 ${fileInText} 입니다.</p>
      <script>
        document.body.children[0].onclick=(${DivClickFileDelete(fileName)});
      </script>` + httptail;
      // status는 200 이고, type은 text.html.
      // PAGE 라는 변수에 html 생긴거 담기.
      // response.write(a)

      // 리플로어 리페인트 P672

      // GET요청 Transaction
      // console.log(request.url) 해보면 링크 왔지만 안읽음
      // Delete 요청 -> 권장은 안함.
      // 기존에 있는 걸 다른거로 바꾸고 새로운 걸 칠해준다.
      // 지운다보다 바꾼다.


      console.log(page)

      // const DivClickFileDelete = () => {
      //   fs.unlinkSync('./' + fileName + '.text');
      // }

      // div.on('click', (fileName) => {
      //   fs.unlinkSync('./' + fileName + '.text');
      // })

      response.write(page);
      // 새기기.
      // 기존데이터를 지워주고 새로새긴다는 절차가 필요함.
      // BOM API의 "히스토리"를 건드려야함.=> 따로 검증을 해보기.
      // mount, unmount 

      response.end();
      // 반응 끝~
    })
  }
  if (request.method === "DELETE" && request.url.startsWith === "/file") {

  }
})

server.listen(2080);
