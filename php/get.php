/*��ȡ�û���¼��Ϣ*/

<?php
include_once ("connect.php");
/*�����Ự*/
session_start();
if (isset($_SESSION['username'])){
   /* �ж��û��Ự���û����Ƿ���ڣ����û��Ƿ��¼*/
   /*���ǳƴ�������һ�᷵�ظ���ҳ*/
    $json['nc']=$_SESSION['nc'];
	/*�û��Ѿ���¼����־flagΪtrue*/
    $json['flag']=true;
}else
/*�û��Ѿ���¼����־flagΪtrue*/
    $json['flag']=false;
/*����json*/
echo json_encode($json);