// console.log(process.stdin)
console.log("쓰고싶은 문자를 입력하세요.");

process.stdin.setDefaultEncoding('utf8');
let ex = [];

process.stdin.on("data", (data) => {
  ex.push(process.stdout.write(data))
  // process.stdout.write(data);
  process.exit()
});

console.log(ex)
