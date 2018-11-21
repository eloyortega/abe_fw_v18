<?php session_start();

$e = $_POST['email'];
$p = $_POST['pw'];

$d = file_get_contents('user.json');
$d = json_decode($d, true);

foreach( $d as $k => $v ){
	if ( $e == $v['email'] && $p == $v['pw'] ) {
		$_SESSION["email"] = $v["email"];
		$_SESSION["img"] = $v["img"];
		header('location:../../appprofile.php');
	} else {
		header('location:../../applogin.php');
	};
};
?>