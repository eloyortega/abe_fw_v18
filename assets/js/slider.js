sliderInt=1;
sliderNext=2;

function startSlider(){
	countOfSlides = $("#slides > Div").size();
}

function showSlide(id){
	if(id > countOfSlides){
		id=countOfSlides;}
	else if(id < 1) {
		id = 1;}
	$("#slides > div").hide();
	$("#slides > div#slide" + id).fadeIn(200);
	$('.pagination > a').removeClass('pagactive');
	$('.pagination > a:eq('+(id-1)+')').addClass('pagactive');
	sliderInt = id;
	sliderNext = id +1;
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

});