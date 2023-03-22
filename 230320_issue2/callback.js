import fs from 'fs'

const DivClickFileDelete = (fileName) => {
  fs.unlinkSync('./' + fileName + '.text');
}

export default DivClickFileDelete