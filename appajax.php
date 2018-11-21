<!doctype html>
<html lang="en">

<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="Cache-Control" content="no-store" />
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

		<h2>Ajax Example</h2>
		<form method="post" enctype="multipart/form-data">
			<label>Name
				<input type="text" name="name" required><br>
			</label>
			<br>
			<label>Photo
				<input type="file" name="photo" required><br>
			</label>
			<p><b>Gender</b></p>
			<label><input type="radio" name="gender" value="Male" required> Male
			</label>
			<label><input type="radio" name="gender" value="Female" required> Female<br>
			</label>
			<br>
			<input type="submit" name="submit" value="Submit" id="submit">
		</form>
		<h2>Profiles</h2>
		<div class="row" id="profile">
		</div>


	</div>
	<!-- Optional JavaScript -->
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="assets/js/jquery.js"></script>
	<script src="assets/js/popper.js"></script>
	<script src="assets/js/bootstrap.min.js"></script>
	<script>
		/* custom script here */
		function cardloading() {
			// is Ajax method to retrieve the Json file
			$.ajax({
				url: 'assets/datahandler/ppl.json',
				type: 'get',
				dataType: 'JSON',
				cache: false,
				error: function(data) {
					console.log(data);
				},
				success: function(data) {
					// upon successfully retrieving the json file loop through the data dynamically generate cards on the index page
					$.each(data, function(index, value) {
						console.log(Object.keys(value));
						console.log(index);
						console.log(value);
						console.log(value.id);
						console.log(value.name);

						var id = value.id;
						var name = value.name;
						var gender = value.gender;
						var img = value.img;

						$('#profile').append('<div class="person col" id="p' + id + '"></div>');
						$('#p' + id).append(`
						<h3> ${id} </h3>
						<div class="profileImage">
							<img src="${img}" class="img-fluid">
						</div>
						<h4>Name: ${name}</h4>
						<p>Gender: ${gender}</p>
					`);
					});
				}
			});
		}

		// execute the function I just created on page load
		cardloading();

		// upon form submission remove all the cards on the  index page
		// Post the data from the form to my PHP which will update for Json file
		// upon success rerun the function to dynamically generated the cards on the next page
		$("form").submit(function(e) {
			$('.person').remove();
			var formData = new FormData($(this)[0]);
			$.ajax({
				url: "assets/datahandler/ajaxprocess.php",
				type: "POST",
				data: formData,
				cache: false,
				contentType: false,
				processData: false,
				success: function() {
					console.log('got here');
					cardloading();
				}
			});
			e.preventDefault();
		});

	</script>
</body>

</html>
