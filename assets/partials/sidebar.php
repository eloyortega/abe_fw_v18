<div class="col-md-4">
	<?php
		$d = file_get_contents('assets/datahandler/article.json');
		$d = json_decode($d, true);
		//print_r($d);
		$categories = [];
		foreach( $d as $k => $v ) {
			if(array_search($v['categories'], $categories) == false){
				array_push( $categories, $v['categories'] );
			};
		};
		print_r($categories);
	?>
</div>