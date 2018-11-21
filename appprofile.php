<?php session_start();
if( !isset($_SESSION["email"]) ){
	header('location:applogin.php');
}
?>
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
		<h2>Profile</h2>
		<p>Email:<br>
			<?php echo $_SESSION["email"]; ?>
		</p>
		<p>Photo:</p>
		<img src="assets/datahandler/<?php echo $_SESSION["img"]; ?>">
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
