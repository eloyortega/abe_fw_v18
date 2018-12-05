<?php
// Step 36: get json data
$d = file_get_contents('graph.json');
$d = json_decode($d, true);

//Step 37: loop through the ajaxed form data
foreach ($_POST as $key => $value) {
//Step 38: if the data isn't from the delete radio button, update the data.
	if($key != "delete"){
		$idx = substr($key, 1);
		$prop = substr($key,0, 1);
		$d[$idx][$prop] = $value;
// Step 39: else delete the object in $d
	} else {
		unset($d[$value]);
	};
};

//Step 40: After edits to data saved, store back into json
$d = json_encode($d);
file_put_contents('graph.json', $d);
?>
