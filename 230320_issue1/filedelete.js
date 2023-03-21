import fs from "fs";

// fs.unlinkSync("./32haekyungs.text",function(error){
//   if(error) console.err("왜 뭐 왜")
//   console.log("삭제쓰")
// });

fs.unlink("./11haekyungs.text",(error)=>{
  if(error) console.error("안되네");
  console.log("./11haekyungs.text 삭제 완료")
})

// .unlink("파일위치파일명",function(error){});