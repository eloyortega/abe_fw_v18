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
		<h2>Login</h2>
		<form action="assets/datahandler/loginprocess.php" method="post">
			<label>Email <br>
				<input type="text" name="email">
			</label>
			<br>
			<label>Password <br>
				<input type="password" name="pw">
			</label>
			<br>
			<input type="submit" value="Login">
		</form>
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
