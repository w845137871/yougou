<?php
include_once ("connect.php");
session_start();/*�����Ự*/
$user=$_GET['username'];/*��ȡ��¼���ύ����������*/
$pwd=$_GET['pwd'];
$result=$link->query("select * from `user` where username='$user' and pwd='$pwd'");
$link = null;
/*��ȡ�����ݿ��ȡ������*/
$row = $result->fetch();
/*������ݴ��ڣ����û���¼�ɹ�*/
if ($row) {
	$_SESSION['username'] = $row['username'];
	/*���û������ǳƴ��ڷ����������Զ��ҳ��ʹ��*/
	$_SESSION['nc'] = $row['nc'];
	$flag=3;
}else{/*�û������������*/
	$flag=2;
}

echo $flag;