$(window).load(function(){

//Mobile Nav Toggle
	$('#mobilemenu').click(function(){
		$('#overlayContainer').slideUp(500);
		$('.nav').toggleClass('active');
		return false;
	});

//Serialize Form on submit
	$( "form" ).on( "submit", function( event ) {
		event.preventDefault();
		$( this ).serialize();
		console.log( $( this ).serialize() );
	});


//Force Radio button to be unchecked on load
	$('.radioReset').prop('checked', false);


//detect IE Browsers
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf('MSIE ');
	var trident = ua.indexOf('Trident/');
	var edge = ua.indexOf('Edge/');
	
	if ( (msie > 0) || (edge > 0) || (trident > 0) ) {
		alert('Why are you using IE');
	}


});