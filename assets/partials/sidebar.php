<div class="col-md-4">
	<?php
		$articles = file_get_contents('assets/datahandler/article.json');
		$articles = json_decode($articles, true);
		//print_r($d);
		$categories = [];
		foreach( $articles as $k => $v ) {
			if(array_search($v['category'], $categories) == false){
				array_push( $categories, $v['category'] );
			};
		};
		?>
		<ul>
			<li><a href="appbloglist.php">All</a></li>
			<?php
				foreach($categories as $i => $val){
					echo '<li><a href="appbloglist.php?'.$val.'">'.$val.'</a></li>';			
				};
			?>
		</ul>
</div>