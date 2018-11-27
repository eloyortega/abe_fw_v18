<!doctype html>
<html lang="en">
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/style.css">
	 <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.11/summernote-bs4.css" rel="stylesheet">
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
				<form method="post" action="assets/datahandler/blogcreate.php">
					<div class="form-group">
						<label>Article<br>
							<input type="text" name="title">
						</label>
					</div>
					<br>
					<div class="form-group">
						<label>Category<br>
							<input type="text" name="category">
						</label>
					</div>
					<br>
					<div class="form-group">
						<label>Date<br>
							<input type="date" name="date">
						</label>
					</div>
					<br>
					<div class="form-group">
						<label>Article<br>
							<textarea name="article" id="summernote"></textarea>
</label>
					</div>
					<br>
					<div class="form-group">
						<input type="submit" value="Publish">
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- Optional JavaScript -->
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="assets/js/jquery.js"></script>
	<script src="assets/js/popper.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>
   
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.11/summernote-bs4.js"></script>
	<script>
        $('#summernote').summernote();

	</script>
</body>
</html>