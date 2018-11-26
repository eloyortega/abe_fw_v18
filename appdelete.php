		<?php
		
			$x = $_SERVER['QUERY_STRING'];

			$d = file_get_contents('assets/datahandler/user.json');
			$d = json_decode($d, true);
			unset($d[$x]);

$d = json_encode($d);
file_put_contents('assets/datahandler/user.json', $d);

header('location: appadmin.php');
?>