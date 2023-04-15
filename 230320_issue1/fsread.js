import fs from 'fs';

async function fileread() {
  await new Promise((resolve, reject) => {
    const data = fs.readFile("index.html", "utf8", (error, data) => {
      if (error) console.error("맨날 안돼 캭")
      resolve(data);
    });
    // console.log(data);

  })
    .then((data) => {
      console.log(data);
    })
}

fileread();

// const data = fs.readFile("index.html","utf8",(error,data)=>{


//   if(error) console.error("또 왜 뭐")
//   console.log(data)
//   return
// });

// console.log(data)
