window.onload = function() {
  document.getElementById('email').addEventListener('blur',function(){
    //正则起始符/^结束符$/
    validateEmail();
  },false);
  document.getElementById('password').addEventListener('blur',function(){
    validatePassword();
  },false);
  document.getElementById('conf').addEventListener('blur',function(){
    validateConf();
  },false);

  document.getElementById('testForm').addEventListener('submit',function(e){
    if (validateEmail()&&validatePassword()&&validateConf()) {
      this.submit;
    } else {
      stopForm(e);
    }
  },false);

document.getElementById('resetBtn').addEventListener('click',function(){
  var inputs=document.getElementsByTagName('INPUT');
  for (var i = 0; i < inputs.length; i++) {
    initForm(inputs[i].id);
  }

},false);

  // document.getElementById('testForm').addEventListener('submit',function(e){
  //   var emailObj=document.getElementById('email');
  //   var emailValue=emailObj.value;
  //   if(emailValue==""){
  //     alert('请填写邮箱');
  //     //动态绑定事件时 阻止提交
  //     if(e && e.preventDefault){//符合W3C的标准下
  //       e.preventDefault();//阻止浏览器的动作
  //     }else {//专门针对IE浏览器的处理
  //        window.event.returnValue=false;
  //     }
  //
  //   }else {
  //     if(/^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/.test(emailObj.value)){
  //       this.submit;
  //     }else{
  //       alert('请正确填写邮箱')
  //       if(e && e.preventDefault){//符合W3C的标准下
  //         e.preventDefault();//阻止浏览器的动作
  //       }else {
  //          window.event.returnValue=false;
  //       }
  //     }
  //   }
  // },false);

  // document.getElementById('testForm').onsubmit = function(e) {
  //  submitEmail(e);
  //   // var emailObj = document.getElementById('email');
  //   // var emailValue = emailObj.value;
  //   // if (emailValue == "") {
  //   //   alert('请填写邮箱');
  //   //   return false;
  //   // } else {
  //   //   if (/^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/.test(emailValue)) {
  //   //     this.submit;
  //   //   } else {
  //   //     alert('请正确填写邮箱')
  //   //     return false;
  //   //   }
  //   // }
  // }
}

function submitEmail(e) {
  var emailObj = document.getElementById('email');
  var emailValue = emailObj.value;
  if (emailValue == "") {
    alert('请填写邮箱');
    //动态绑定事件时 阻止提交
    if(e && e.preventDefault){//符合W3C的标准下
      e.preventDefault();//阻止浏览器的动作
    }else {//专门针对IE浏览器的处理
       window.event.returnValue=false;
    }
  } else {
    if (/^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/.test(emailValue)) {
      this.submit;
    } else {
      alert('请正确填写邮箱')
      //动态绑定事件时 阻止提交
      if(e && e.preventDefault){//符合W3C的标准下
        e.preventDefault();//阻止浏览器的动作
      }else {//专门针对IE浏览器的处理
         window.event.returnValue=false;
      }
    }

  }
}

function validateEmail(){
  return validateRegexEmail('email');
}

function validatePassword(){
  return validateEmpty('password');
}

function validateConf(){
  return validateRepeat('password','conf');
}
