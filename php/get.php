/*获取用户登录信息*/

<?php
include_once ("connect.php");
/*开启会话*/
session_start();
if (isset($_SESSION['username'])){
   /* 判断用户会话里用户名是否存在，即用户是否登录*/
   /*把昵称存起来，一会返回给首页*/
    $json['nc']=$_SESSION['nc'];
	/*用户已经登录，标志flag为true*/
    $json['flag']=true;
}else
/*用户已经登录，标志flag为true*/
    $json['flag']=false;
/*返回json*/
echo json_encode($json);