<?php
$x = $_GET['set'];

$d = file_get_contents('vote.json');
$d = json_decode($d, true);

++$d[$x];

$d = json_encode($d);
file_put_contents('vote.json', $d);

header('location:../../appvote.php');
?>
