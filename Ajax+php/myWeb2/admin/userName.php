<?php
$userName = $_GET["userName"];
$cbName=$_GET["cb"];
if($userName == 'xiaoming'){
	echo $cbName."('NO')";
}else{
	echo $cbName."('OK')";
}
?>
