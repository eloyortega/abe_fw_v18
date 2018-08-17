sliderInt=1;
sliderNext=2;

function startSlider(){
	count = $("#slides > Div").size();
	loop = setInterval(function(){
		if(sliderNext > count){
			sliderNext=1;
			sliderInt = 1;
		}
		$("#slides > div").hide( "slide", { direction: "left" }, 500 );
		$("#slides > div#slide" +sliderNext).show( "slide", { direction: "right" }, 500 );
		$('.pagination > a').removeClass('pagactive');
		$('.pagination > a:eq('+sliderInt+')').addClass('pagactive');
		sliderInt = sliderNext;
		sliderNext = sliderNext +1;
	}, 5000)
}

function stopLoop(){
	window.clearInterval(loop);
}

function showSlide(id){
	stopLoop();
	if(id > count){
		id=1;}
	else if(id < 1) {
		id = count;}
	$("#slides > div").fadeOut(200);
	$("#slides > div#slide" + id).fadeIn(200);
	$('.pagination > a').removeClass('pagactive');
	$('.pagination > a:eq('+(id-1)+')').addClass('pagactive');
	sliderInt = id;
	sliderNext = id +1;
	startSlider();
}

function prev(){
	newSlide = sliderInt - 1;
	showSlide(newSlide);
}

function next(){
	newSlide = sliderInt + 1;
	showSlide(newSlide);
}


$(document).ready(function(){

	$("#slides > div#slide1").fadeIn(500);
	$('.pagination > a').removeClass('pagactive');
	$('.pagination > a:eq(0)').addClass('pagactive');
	startSlider();

	$( ".pagination > a" ).click(function() {
		pag = $( ".pagination > a" ).index( this ) + 1;
		stopLoop();
		$("#slides > div").fadeOut(200);
		$("#slides > div#slide" + pag).fadeIn(200);
		$('.pagination > a').removeClass('pagactive');
		$(this).addClass('pagactive');
		startSlider();
		if(sliderNext =  pag){
			sliderNext=(pag+1);
		}
	});

	$("#slides > div").hover(
		function (){
			stopLoop();
		},
		function (){
			startSlider();
		}
	);
});

