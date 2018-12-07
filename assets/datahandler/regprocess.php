<?php
$e = $_POST['email'];
$p = $_POST['pw'];
$u = $_FILES['userimg'];

$d = file_get_contents('user.json');
$d = json_decode($d, true);

$idx = end(array_keys($d));
print_r ($idx);

++$idx;
echo $idx;

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
	$i = 'users/'.count($d).$x;
	move_uploaded_file($t, $i);
};

$a = [
	"email" => $e,
	"pw" => $p,
	"img" => $i
];

$d[$idx] = $a;
//print_r($d);
$d = json_encode($d);
file_put_contents('user.json', $d);

header('location:../../applogin.php');
?>