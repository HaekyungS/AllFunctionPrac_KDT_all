import fs from 'fs';
//  저게 되나 => 안됨

// function promiseWriteMemoToFile(memoTitle, memo){
//   return new Promise((resolve,reject)=>{
//     fs.appendFile(`${memoTitle}.txt`,`${memo}`,(err)=>{
//       if(err) throw err;
//       else resolve();
//     })
//   })
// }

async function writeMemoToFile(memoTitle,memo){
  if(typeof memoTitle === "string" && typeof memo === "string"){
    await fs.appendFile(`${memoTitle}.txt`,`${memo}`);
    console.log('appendFile 메서드의 특징 때문에 반복해서 실행하면 해당 파일 안에 내용이 추가(덧붙이기) 된다.')
  }
}

async function readMemoFromFile(memoTitle){
  const data = await fs.readFile(`${memoTitle}.txt`,'utf-8');
  console.log("메모 내용 조회하기");
  console.log(data);
}

writeMemoToFile("test","It's memojang");
readMemoFromFile("test");