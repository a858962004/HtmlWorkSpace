function bindObj(objId){
  return document.getElementById(objId);
}

function addListen(event,obj,fun){
  return obj.addEventListener(event,fun,false);
}
