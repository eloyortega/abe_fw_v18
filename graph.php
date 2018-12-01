<?php
$d = '';
foreach ($_POST as $key => $value) {
    $d .= "Field ".htmlspecialchars($key)." is ".htmlspecialchars($value)."<br>";
};

file_put_contents('graph2.txt', $d);
?>