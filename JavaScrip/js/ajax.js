window.onload=function(){

  document.getElementById('requestBtn').addEventListener('click', function(e) {
    requestData();
  });
}

function requestData(){
  var xmlhttp;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("result").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","E:/HtmlWorkSpace/JavaScrip/ajax_info.txt",true);
	xmlhttp.send();
}
