window.onload = function() {
  document.getElementById('userName').onblur = function() {
    // var userName=document.getElementById('userName').value;
    // //创建script标签，通过script跨域调用接口
    // var script=document.createElement("script");
    // script.src='http://192.168.43.128:8081/admin/userName.php?userName='+userName+'&cb=foo';
    // //将script添加到head中
    // var head=document.getElementsByTagName('head')[0];
    // head.appendChild(script);
    //

    var obj = {
      url: 'http://192.168.43.128:8081/admin/userName.php',
      params: {
        userName: this.value
      },
      jsonp: 'cb',
      success: function(result) {
        console.log(result);

      }
    };
    myajax3(obj);
  };
  //jquery跨域方法
  //需要设置dataType:'jsonp',和jsonp:""
  $('#email').blur(function() {
    $.ajax({
      url: 'http://192.168.43.128:8081/admin/email.php',
      data: {
        email: $(this).val()
      },
      dataType:'jsonp',//dataType包含text，XML，json和jsonp,当请求跨域时，需设置为jsonp
      jsonp:'cb',//后台指定回调参数
      success:function(result){
        console.log(result);
      }
    });

  })

};

//前台定义方法  后台调用方法返回数据
// function foo(data){
//   console.log(data);
// }
