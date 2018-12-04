<?php
$k = '';
$v = '';

$d = file_get_contents('graph.json');
$d = json_decode($d, true);

foreach ($_POST as $key => $value) {
	if($key != "delete"){

		$idx = substr($key, 1);
		$prop = substr($key,0, 1);
		$d[$idx][$prop] = $value;

	} else {
		unset($d[$value]);
	};
};

$d = json_encode($d);

file_put_contents('graph.json', $d);
?>
