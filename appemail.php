<!doctype html>
<html lang="en">

<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/style.css">
	<title>ABE Template 2018 | BS4 Template</title>
	<style>
		/*custom page css here*/
	</style>
</head>

<body>
	<?php require_once('assets/partials/nav.php')?>
	<!-- HTML here. -->
	<h1>Bootstrap 4 template</h1>
	<p><a href="index.html" class="btn-primary btn">Back to Home</a></p>
	<div class="container">
		<h2>Email</h2>
		<form method="get">
			<label>To: <br>
				<input type="text" name="to">
			</label>
			<br>
			<label>From: <br>
				<input type="text" name="from">
			</label>
			<br>
			<label>Subject: <br>
				<input type="text" name="subject">
			</label>
			<br>
			<label>Message: <br>
				<textarea name="message"></textarea>
			</label>
			<br>
			<input type="submit" value="Send Email">
		</form>

<?php

$t = $_GET['to'];
$f = $_GET['from'];
$s = $_GET['subject'];
$m = $_GET['message'];

$b = '
	<html>
		<body>
			<p style="font-size:18px;">
				From: '.$f.'<br><br>
				To: '.$t.'<br><br>
				Subject: '.$s.'<br><br>
				Message: '.$m.'
			</p>
		</body>
	</html>
';

$h = 'MIME-Version: 1.0' . "\r\n". 'Content-type: text/html; charset=iso-8859-1' . "\r\n".'From: '.$f."\r\n".'Reply-To: '.$f."\r\n".'X-Mailer: PHP/' . phpversion();

mail($t, $s, $b, $h);

?>
	</div>
	<!-- Optional JavaScript -->
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="assets/js/jquery.js"></script>
	<script src="assets/js/popper.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>
	<script>
		/* custom script here */

	</script>
</body>

</html>
