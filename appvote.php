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
	<h1>Bootstrap 4 template</h1>
	<p><a href="index.html" class="btn-primary btn">Back to Home</a></p>
	<div class="container">
		<?php
				$d = file_get_contents('assets/datahandler/vote.json');
				$d = json_decode($d, true);
		?>
		<form method="get" action="assets/datahandler/voteprocess.php">
			<h2>Vote for your favorite:</h2>
			<label>
				<input type="radio" name="set" value="option1"> Option 1
			</label>
			<br>
			<p><?php echo $d['option1']; ?> Votes</p>
			<label>
				<input type="radio" name="set" value="option2"> Option 2
			</label>
			<br>
			<p><?php echo $d['option2']; ?> Votes</p>
			<label>
				<input type="radio" name="set" value="option3"> Option 3
			</label>
			<br>
			<p><?php echo $d['option3']; ?> Votes</p>
			<input type="submit" value="Vote" name="sub">
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