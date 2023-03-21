import http from 'http';
// console.dir(http);

const server = http.createServer((request, response) => {
// 매개변수와 콜백함수가 createServer의 기동방식
// 동적으로 실행 알고리즘을 짜준다.
// request, response 는 권장하지 않지만 원하는 이름으로 바꿔도 무관함.

// console.dir(response)

let body = '';
body += '<!DOCTYPE html>';
body += '<html>';
body += '<head>';
body += '<title>Node.js</title>';
body += '</head>';
body += '<body>';
body += '<h1>Hello World!</h1>';
body += '</body>';
body += '</html>';
// 이 부분이 비지니스로직
// end유저 앞까지만 문자열이면 됨. end유저가 볼 때 html 이면 됨.
// 내가 문서를 다 만드는 건 서버사이드.

response.statusCode = 200;
response.setHeader('Content-type','text/html');
response.end(body)

})

server.listen(2080);