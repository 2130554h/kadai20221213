function f(n){
  let cs = n.childNodes;
  for(let i = 0; i < cs.length; i++){
    let c = cs[i];
    if(c.nodeType == Node.TEXT_NODE){
      c.textContent = c.textContent.replace(/(,*0*)0+円/g, "円").replace(/,/g, "").replace(/\(税込([0-9]*,)*[0-9]*円\)/g,"").replace(/か/g, " カ").replace(/。/g,"!");
    }
    else{
      f(c);
    }
  }
}

f(document.body);