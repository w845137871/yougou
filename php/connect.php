<?php
$link=new PDO("mysql:host=localhost;port=3306;dbname=db","root","pwd");
$link->query("set names utf8")