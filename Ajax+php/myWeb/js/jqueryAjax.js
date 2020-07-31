window.onload = function() {
  $('#userName').blur(function() {
    var url = 'admin/userName.php';
    console.log($(this).val());
    var parames = {
      userName: $(this).val()
    };
    //jqueryAjax中get请求方法
    $.get(url, parames, function(data, status, xhr) {
      console.log(data);
      if (data == 'OK') {
        //。text设置文本内容
        $('#userNameSpan').text('该用户可以使用');

      } else {
        $('#userNameSpan').text('该用户已被注册');
      }
    });
  });

  $('#tel').blur(function() {
    var url = 'admin/tel.php';
    var params = {
      tel: $(this).val()
    };
    $.post(url, params, function(data, status, xhr) {
      var jsonObj = JSON.parse(data);
      if (jsonObj.status == 1) {
        $('#telSpan').text(jsonObj.msg);
      } else {
        $('#telSpan').text(jsonObj.msg.tips + "----" + jsonObj.msg.from);
      }
    });
  });

  $('#email').blur(function() {
    var url = 'admin/email.php';
    var params = {
      email: $(this).val()
    };
    // $.ajax()方法中传入的是一个对象，注意{}
    $.ajax({
      url: url,
      type: 'get',
      data: params,
      success: function(data) {
        console.log(data);
        if (data == 'OK') {
          //。text设置文本内容
          $('#emailSpan').text('该邮箱可以使用');

        } else {
          $('#emailSpan').text('该邮箱已被注册');
        }
      }
    });

  });

}
