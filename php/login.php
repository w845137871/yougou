<?php
include_once ("connect.php");
session_start();/*开启会话*/
$user=$_GET['username'];/*获取登录表单提交过来的数据*/
$pwd=$_GET['pwd'];
$result=$link->query("select * from `user` where username='$user' and pwd='$pwd'");
$link = null;
/*读取从数据库获取的数据*/
$row = $result->fetch();
/*如果数据存在，即用户登录成功*/
if ($row) {
	$_SESSION['username'] = $row['username'];
	/*将用户名和昵称存在服务器，可以多个页面使用*/
	$_SESSION['nc'] = $row['nc'];
	$flag=3;
}else{/*用户名或密码错误*/
	$flag=2;
}

echo $flag;