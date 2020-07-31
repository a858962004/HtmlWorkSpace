/**
 * [myajax ajax封装]
 * @param  {[type]}   type       [请求类型  get、post]
 * @param  {[type]}   url        [请求地址]
 * @param  {[type]}   params     [参数 'userName=xiaoming&tel=138111111']
 * @param  {[type]}   resultType [返回结果类型   text  json  xml]
 * @param  {Function} callback   [回调函数   参数result]
 * @return {[type]}              [description]
 */
function myajax(type, url, params, resultType, callback) {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (type == 'get') {
    if (params && params != '') {
      url = url + "?" + params;
    }
  }
  xmlhttp.open(type, url, true);
  if (type == 'get') {
    xmlhttp.send(null);
  } else if (type == 'post') {
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(params);
  }

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var result = null;
      if (resultType == 'text') {
        result = xmlhttp.responseText;
      } else if (resultType == 'json') {
        result = xmlhttp.responseText;
        result = JSON.parse(result);
      } else if (resultType == 'xml') {
        result = xmlhttp.responseXML;
      }

      if (callback) {
        callback(result);
      }
    }
  }
}


//优化封装ajax  以对象作为参数并设置默认值
//type, url, params, resultType, callback

/**
 * [myajax2 ajax进一步封装]
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function myajax2(obj){
  //设置默认对象
  var defaults={
    type:'get',
    url:'#',
    params:{},
    resultType:'text',
    success:function(result){console.log(result);}
  }

//for in 循环 将obj的参数值赋值给defaults
  for (var key in obj) {
    defaults[key]=obj[key];
  }
  //初始化xmlhttp
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  //设置参数
  var params='';
  for (var attr in defaults.params) {
    params+=attr+"="+defaults.params[attr]+"&";
  }
  if (params) {
    params=params.substring(0,params.length-2);
  }
  //get方法时 设置url
  if (defaults.type=='get'&&params!='') {
    defaults.url+='?'+params;
  }
  //发送请求
  xmlhttp.open(defaults.type, defaults.url, true);
  if (defaults.type == 'get') {
    xmlhttp.send(null);
  } else if (defaults.type == 'post') {
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(params);
  }
  //请求回调
  xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState==4&&xmlhttp.status==200) {
      var result;
      if (defaults.resultType=='text') {
        result=xmlhttp.responseText;
      }else if (defaults.resultType=='json') {
        result=xmlhttp.responseText;
        result=JSON.parse(result);
      }else if (defaults.resultType=='xml') {
        result=xmlhttp.responseXML;
      }
      defaults.success(result);
    }
  }



}
