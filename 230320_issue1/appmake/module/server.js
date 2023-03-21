import http from "http";
import fs from "fs";

// import createtag from "./createTag.js";
// const formprop = {
//   method: "POST"
// }
// const form = createtag("form", formprop);

// const inputprop = {
//   type : "text"
// }
// const input = createtag("input",inputprop);
// // 쓰고보니까 태그 생성은 되지만 자식을 만들기가 어려움

// const page = fs.readFile("index.html","utf8",(error,page)=>{
//   if(error) console.error("warning");
//   // console.log(page);
// })

// let dataInData;


const server = http.createServer((request, response) => {

  // const page = fs.readFile("index.html","utf8",(error,page)=>{
  //   if(error) console.error("warning");
  //   response.write(page);
  // })
  async function fileread() {
    await new Promise((resolve, reject) => {
      const data = fs.readFile("index.html", "utf8", (error, data) => {
        if (error) console.error("맨날 안돼 캭")
        resolve(data);
        // console.log(data);
      });
    })
      .then((data) => {

        // console.log(data);
        // console.log(document.getElementsByTagName("form")[0])

        if (request.method === "GET" && request.url === "/") {

          // console.log(document.getElementsByTagName("input"))

          response.writeHead(200, { 'Content-Type': 'text/html' });
          response.write(data);
          response.end();

        }
        if (request.method === "GET" && request.url.startsWith("/appmake")) {
          response.writeHead(200, { 'Content-Type': 'text/html' });
          response.write(data);
          // const filename = document.getElementsByTagName("input")[0].value;
          // const fileInText = document.getElementsByTagName("input")[1].value;
          response.end();
        }
      })
  }
  fileread();
  // response.end();

})

server.listen(2080);
// console.log(dataInData);