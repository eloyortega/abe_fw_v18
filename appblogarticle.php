<?php
	$x = $_SERVER['QUERY_STRING'];
	if( $x == '' ){
		header('location:appbloglist.php');
	};
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
	<!-- HTML here. -->
	<?php require_once('assets/partials/nav.php')?>
	<h1>Bootstrap 4 template</h1>
	<p><a href="index.html" class="btn-primary btn">Back to Home</a></p>
	<div class="container">
		<div class="row">
			<?php require_once('assets/partials/sidebar.php')?>
			<div class="col-md-8">
			
			<?php
				$d = file_get_contents('assets/datahandler/article.json');
				$d = json_decode($d, true);

				echo '
					<h1>'.$d[$x]['title'].'</h1>
					<h3>'.$d[$x]['date'].'</h3>
					<div>'.$d[$x]['article'].'</div>
				';
			?>
		</div>
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