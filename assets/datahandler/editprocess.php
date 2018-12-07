<?php

$q = $_SERVER['QUERY_STRING'];

$e = $_POST['email'];
$p = $_POST['pw'];
$u = $_FILES['userimg'];

$d = file_get_contents('user.json');
$d = json_decode($d, true);

if( $e !== '' ){
	$d[$q]['email'] = $e;
};

if( $p !== '' ){
	$d[$q]['pw'] = $p;
};

if( file_exists($u['tmp_name']) ){
	switch( $u['type'] ) {
	case 'image/jpeg':
		$x = '.jpg';
		break;
	case 'image/png':
		$x = '.png';
		break;
	case 'image/gif':
		$x = '.gif';
		break;
	default:
		$x = '';
		break;
};

$t = $u['tmp_name'];

if( $x != '' ){
	$i = 'users/'.$q.$x;
	move_uploaded_file($t, $i);
};

	$d[$q]['img'] = $i;
};

//print_r($d);

$d = json_encode($d);
file_put_contents('user.json', $d);

header('location:../../appadmin.php');
?>