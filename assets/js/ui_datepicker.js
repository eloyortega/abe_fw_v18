$(function() {
	var currentDate = new Date();
	$('.datepicker').datepicker({dateFormat: 'M dd, yy'});
	$('.today').datepicker('setDate',currentDate);
});