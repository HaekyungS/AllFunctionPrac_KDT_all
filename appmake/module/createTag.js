const tagmaker = (tag,prop,child)=>{
  if(prop!==undefined){
    for(let type in prop){
      return "<"+tag+" "+type+":"+prop[type]+">" +"  "+"</"+tag+">"
    }
  }
  else{return "<"+tag+">"+"</"+tag+">"}
  
}

export default tagmaker;


// const createDoc = (tag,parents,attri,attrivalue)=>{
//   const element = document.createElement(tag);
//   parents.appendChild(element);
//   if(attri!==undefined){
//     element.createAttribute(attri,attrivalue);
//   }
// }