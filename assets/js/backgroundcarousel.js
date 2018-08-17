$(window).load ( function (){
	carmotion = 0;
	carmotion2 = 0;
	bgW = $('#carousel').css('background-size');
	if (bgW == 'cover'){
		motion = function(){
			carmotion = carmotion - 1;
			carmotion2 = carmotion2 + 1;
		};
	}else{
		bgW= bgW.substr(0, bgW.indexOf('px')); 
		
		motion = function(){
			carmotion = carmotion - 1;
			carmotion2 = carmotion2 + 1;
			if (carmotion == '-'+bgW){
				carmotion = 0;
				carmotion2 = 0;
			}
		};
		
	}
setInterval(function(){
	motion();
	$('#carousel').css('background-position', carmotion+'px center');
	$('#carousel2').css('background-position', carmotion2+'px center');
},30)
	console.log(bgW);
});