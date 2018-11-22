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
		<form method="get">
			<label> Search<br>
				<input type="search" name="query">
			</label>
			<br>
			<input type="submit" value="search now">
			
		</form>
		<div class="row" id="cardcontainer">
			<?php
				$d = file_get_contents('assets/datahandler/dynamic.json');
				$d = json_decode($d, true);
				$x = $_GET['query'];

				foreach( $d as $k => $v ) {
					if( $x == '' || stripos($v['hn'], $x) !== false || stripos($v['city'], $x) !== false || stripos($v['rn'], $x) !== false ){
						echo '
						<div class="col-md-2 p-1">
							<div class="card">
								<div class="card-header">
									<b>'.$v['hn'].'</b>
								</div>
								<img class="card-img-top" src="'.$v['img'].'">
								<div class="card-body">
									<p class="card-text">
										<b>Real Name:</b><br>
										'.$v['rn'].'
										<br><br>
										<b>City:</b><br>
										'.$v['city'].'
									</p>
								</div>
							</div>
						</div>
					';
					}

				};
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