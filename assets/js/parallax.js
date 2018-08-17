parallaxUpTop = function(){
	var parallaxPos = $(window).scrollTop();
	$('#parallax1').css('background-position', 'center '+(50 - parallaxPos)+'%');
	$('#parallax2').css('background-position', 'center '+(50 - (parallaxPos / 2))+'%');
	$('#parallax3').css('background-position', 'center '+(50 - (parallaxPos / 3))+'%');
	$('#parallax4').css('background-position', 'center '+(50 - (parallaxPos / 4))+'%');
};
parallaxDownTop = function(){
	var parallaxPos = $(window).scrollTop();
	$('#parallax1').css('background-position', 'center '+(50 + parallaxPos)+'%');
	$('#parallax2').css('background-position', 'center '+(50 + (parallaxPos / 2))+'%');
	$('#parallax3').css('background-position', 'center '+(50 + (parallaxPos / 3))+'%');
	$('#parallax4').css('background-position', 'center '+(50 + (parallaxPos / 4))+'%');
};
parallaxUpBottom = function(){
	var winscrolltop = $(window).scrollTop();
	var winheight = $(window).height();
	var documentheight = $(document).height();
	var parallaxPos = (winscrolltop + winheight) - documentheight;
	$('#parallax1').css('background-position', 'center '+(50 - parallaxPos)+'%');
	$('#parallax2').css('background-position', 'center '+(50 - (parallaxPos / 2))+'%');
	$('#parallax3').css('background-position', 'center '+(50 - (parallaxPos / 3))+'%');
	$('#parallax4').css('background-position', 'center '+(50 - (parallaxPos / 4))+'%');
};	
parallaxDownBottom = function(){
	var winscrolltop = $(window).scrollTop();
	var winheight = $(window).height();
	var documentheight = $(document).height();
	var parallaxPos = (winscrolltop + winheight) - documentheight;
	$('#parallax1').css('background-position', 'center '+(50 + parallaxPos)+'%');
	$('#parallax2').css('background-position', 'center '+(50 + (parallaxPos / 2))+'%');
	$('#parallax3').css('background-position', 'center '+(50 + (parallaxPos / 3))+'%');
	$('#parallax4').css('background-position', 'center '+(50 + (parallaxPos / 4))+'%');
};		

$(window).load(function(){
	 parallaxUpBottom();
});

$(window).scroll(function(){
	parallaxUpBottom();
});

$(window).resize(function(){ 
	parallaxUpBottom(); 
});