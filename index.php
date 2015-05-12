<?php
session_start();
date_default_timezone_set("America/Bogota");
ini_set('display_errors', 1);
define('DS', DIRECTORY_SEPARATOR);
define('ROOT', realpath(dirname(__FILE__)) . DS);


$ip = $_SERVER['REMOTE_ADDR'];
$data= date("d/m/Y g:i:s a e");

if($file = fopen("count.txt","a+"))
{
    fputs($file,"La visita fue: ". $data." y la ip del visitante es: ". $ip. "\n");
}

try {
    $url = isset($_GET['url']) ? $_GET['url'] : 'home';
    require ROOT . 'layout' . DS . 'default.php';


} catch (Exception $e) {
    echo $e->getMessage();
}