const tagmaker = (tag,prop)=>{
  if(prop!==undefined){
    for(let type in prop){
      return "<"+tag+" "+type+":"+prop[type]+">" +"  "+"</"+tag+">"
    }
  }
  else{return "<"+tag+">"+"</"+tag+">"}
  
}

export default tagmaker;