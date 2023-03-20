import fs, { writeFileSync } from 'fs';
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
  if (request.method === "GET" && request.url === "/") {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(httphead + form + httptail);
    response.end();
  }
  if (request.method === "POST" && request.url.startsWith("/file")) {
    let a = "";
    request.on("data", (data) => {
      a += data;
      // console.log(data)
    })
    request.on("end", () => {
      let fileName = a.split("=")[1].split("&")[0];
      let fileInText = a.split("=")[2];
      writeFileSync("./" + fileName + ".text", fileInText);
      response.writeHead(200, { 'Content-Type': 'text/html' });
      const page = httphead + form + `<p> ${fileName} 이름의 파일이 생성되었습니다. 파일 내에는 ${fileInText} 입니다.</p>` + httptail;
      // response.write(a)
      response.write(page);
      // 기존데이터를 지워주고 새로새긴다는 절차가 필요함.
      // BOM API의 "히스토리"를 건드려야함.=> 따로 검증을 해보기.
      // mount, unmount 
      response.end();

    })
  }
})

server.listen(2080);