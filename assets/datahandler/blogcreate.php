<?php
$t = $_POST['title'];
$c = $_POST['category'];
//$d = $_POST['date'];
$a = $_POST['article'];

$data = file_get_contents('article.json');
$data = json_decode($data, true);



$idx = count($data);

++$idx;

$array = [
//	"date" => $d,
	"category" => $c,
	"title" => $t,
	"article" => $a
];

$data = array($idx => $array) + $data;

$data = json_encode($data);
file_put_contents('article.json', $data);

header('location:../../appbloglist.php');
?>