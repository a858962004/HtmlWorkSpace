window.onload = function() {
  document.getElementById('submitbtn').addEventListener('click', function(e) {
    myajax('get', 'register.php', 'userName=' + document.getElementById('userName').value, 'text', function(result) {
      document.getElementById('message').innerHTML = result;
    });
    // body...
    // console.log("11111111111111a");
    // var xmlhttp;
    // if (window.XMLHttpRequest) {
    //   xmlhttp = new XMLHttpRequest();
    //
    // } else {
    //   xmlhttp = new ActiveXObject('Microsoft.XMLHttp');
    // }
    // xmlhttp.open('get', 'register.php?userName=' + document.getElementById('userName').value, true);
    // xmlhttp.send();
    // xmlhttp.onreadystatechange = function() {
    //   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    //     console.log(xmlhttp.responseText);
    //     document.getElementById('message').innerHTML=xmlhttp.responseText;
    //   }
    // };
  }, false);


  document.getElementById('userName2').onblur = function() {
    var nameObj = {
      type: 'get',
      url: 'admin/userName.php',
      params: {
        userName: document.getElementById('userName2').value
      },
      resultType: 'text',
      success: function(result) {
        console.log(result);
        if (result == 'OK') {
          document.getElementById('userNameSpan').innerHTML = '该用户可以使用';

        } else {
          document.getElementById('userNameSpan').innerHTML = '该用户已被注册';
        }
      }
    };
    myajax2(nameObj);
    // var xmlhttp=new XMLHttpRequest();
    // console.log(document.getElementById('userName2').value);
    // xmlhttp.open('get','./admin/userName.php?userName='+document.getElementById('userName2').value,true);
    // xmlhttp.send();
    // xmlhttp.onreadystatechange=function(){
    //   if (xmlhttp.readyState==4&&xmlhttp.status==200) {
    //     if (xmlhttp.responseText=='OK') {
    //       document.getElementById('userNameSpan').innerHTML='该用户可以使用';
    //
    //     }else{
    //       document.getElementById('userNameSpan').innerHTML='该用户已被注册';
    //     }
    //   }
    // };
  }

  //post请求，注意需添加请求头，JSON.parse()方法可以将json字符串转换为对象
  document.getElementById('tel').onblur = function() {
    var xmlhttp = new XMLHttpRequest();
    var params = "tel=" + document.getElementById('tel').value;
    xmlhttp.open('post', 'admin/tel.php', true);
    //post方法需要添加请求头
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(params);
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log(xmlhttp.responseText);
        var telObj = JSON.parse(xmlhttp.responseText);
        if (telObj.status == 1) {
          document.getElementById('telSpan').innerHTML = telObj.msg;
        } else {
          document.getElementById('telSpan').innerHTML = telObj.msg.tips + "----" + telObj.msg.from;
        }

      }
    };
  };

  //获取xml数据,生成学生信息表
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('get', 'admin/student.php', true);
  xmlhttp.send(null);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      // console.log(xmlhttp.responseXML);
      var xml = xmlhttp.responseXML;
      var students = xml.getElementsByTagName('student');
      for (var i = 0; i < students.length; i++) {
        var studentName = students[i].getElementsByTagName('name')[0].textContent;
        var studentAge = students[i].getElementsByTagName('age')[0].textContent;
        var studentSex = students[i].getElementsByTagName('sex')[0].textContent;
        document.getElementsByClassName('studentTB')[0].innerHTML += '<tr><td>' + studentName + '</td>' + '<td>' + studentAge + '</td>' + '<td>' + studentSex + '</td></tr>';
      }
      // console.log(document.getElementsByClassName('studentTable')[0].innerHTML);

    }
  }
}
