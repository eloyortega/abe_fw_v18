$(document).ready(function() {

	setInterval(function(){
		var beginDate = new Date("12/26/2015");
		var todayDate = new Date();
	
		if(todayDate < beginDate){
			var todayHrs = (23)-(todayDate.getHours());
			var todayMin = (59)-(todayDate.getMinutes());
			var todaySec = (59)-(todayDate.getSeconds());
	
			var timeDiff = Math.abs(todayDate.getTime() - beginDate.getTime());
			var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
	
			$('.durationDay').text(diffDays-1);
			$('.durationHr').text(todayHrs);
			$('.durationMin').text(todayMin);
			$('.durationSec').text(todaySec);
		}
	}, 1000);
});