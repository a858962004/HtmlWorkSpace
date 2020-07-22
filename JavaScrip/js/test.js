
var currPage=1;

function changePic(){
  var mypic=document.getElementById('mypic');
  mypic.src='images/pic-'+currPage+".jpg";
}

function automChagePic(){
  if(currPage<7){
    currPage++;
  }else{
    currPage=1;
  }
  changePic();
  setTimeout(function(){
    automChagePic();
  }, 1000);
}

function changeBgColor(obj,color){
  obj.style.backgroundColor=color;
}

window.onload=function(){
  var btn=document.getElementById('btn');
  btn.addEventListener('click',function(){
    alert('hello word!');
  },false);

document.getElementById('previousBtn').addEventListener('click',function(){
  if(currPage>1){
    currPage--;
  }
  changePic();
},false);
document.getElementById('nextBtn').addEventListener('click',function(){
  if(currPage<7){
    currPage++;
  }
  changePic();
},false);
automChagePic();
// 获取所有id为infoTr的对象数组
var inforTrs=document.all('infoTr');
for (var i = 0; i < inforTrs.length; i++) {
  inforTrs[i].addEventListener('mouseover',function(){changeBgColor(this,'#ffffff')},false);
  inforTrs[i].addEventListener('mouseout',function(){changeBgColor(this,'#f2f2f2')},false);
}
}
