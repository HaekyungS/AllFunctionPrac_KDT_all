// import fs from 'fs'

function DivClickFileDelete(fileName){
  fs.unlinkSync('./'+fileName+'.text')
}

export default DivClickFileDelete();