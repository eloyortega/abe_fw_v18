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
		<h2>Edit User</h2>
		<?php
		
			$x = $_SERVER['QUERY_STRING'];

			$d = file_get_contents('assets/datahandler/user.json');
			$d = json_decode($d, true);
			$d = $d[$x];

		?>
		<form action="assets/datahandler/editprocess.php?<?php echo $x?>" method="post" enctype="multipart/form-data">
			<label>New Email <br>
				<input type="text" name="email" value="<?php echo $d['email']?>">
			</label>
			<br>
			<label>New Password <br>
				<input type="password" name="pw">
			</label>
			<br>
			<label>New Photo <br>
				<input type="file" name="userimg">
			</label>
			<br>
			<input type="submit" value="Edit">
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
