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
		.post{
			display:none;
		}
		.post:nth-child(1),
		.post:nth-child(2),
		.post:nth-child(3),
		.post:nth-child(4),
		.post:nth-child(5),
		.post:nth-child(6),
		.post:nth-child(7),
		.post:nth-child(8),
		.post:nth-child(9),
		.post:nth-child(10){
			display:block;
		}
		

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
					$x = $_SERVER['QUERY_STRING'];
					$x = str_replace("%20"," ",$x);
					
					$d = file_get_contents('assets/datahandler/article.json');
					$d = json_decode($d, true);
				foreach( $d as $k => $v ) {
					if ( $x == $v['category'] || $x == '' ) {
						echo '
							<div class="m-2 p-3 border post">
								<h2><a href="appblogarticle.php?'.$k.'">'.$v['title'].'</a></h2>
								<div>'.substr($v['article'],0,500).'...</div>
							</div>
						';
					};
				};
				?>
				<button class="next btn btn-primary">NEXT</button>
			</div>
		</div>
	</div>
	<!-- Optional JavaScript -->
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="assets/js/jquery.js"></script>
	<script src="assets/js/popper.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>
	<script>
		/* custom script here */
		var c = 10;
		
		$('.next').click(function(){
			if( c < $('.post').length ){
				//alert(c);
				$('.post').hide();
				$('.post:eq('+c+'), .post:eq('+(c+1)+'), .post:eq('+(c+2)+'), .post:eq('+(c+3)+'), .post:eq('+(c+4)+'), .post:eq('+(c+5)+'), .post:eq('+(c+6)+'), .post:eq('+(c+7)+'), .post:eq('+(c+8)+'), .post:eq('+(c+9)+')').show();
				c += 10;
			};
		});
	</script>
</body>

</html>
