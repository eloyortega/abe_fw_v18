$(window).load(function(){

//Mobile Nav Toggle
	$('#mobilemenu').click(function(){
		$('#overlayContainer').slideUp(500);
		$('.nav').toggleClass('active');
		return false;
	});
	
//OVERLAYS Controls
	$('.closeParent').click(function(){
		$(this).parents('#overlayContainer').slideUp(500);
			$(this).parent().fadeOut(500);
		return false;
	});

	$("#overlayContainer").click(function(){
		$(this).fadeOut();
		$('#overlayContainer > div').fadeOut();
		return false;
	});

	$('#overlayContainer > div').click(function(event) {
		event.stopPropagation();
	});

	$("a[class*='overlayBtn']").click(function(){
		overlayBtn= $(this).attr('class').split(' ');
		$.each(overlayBtn, function(i, classvalue){
			if(classvalue.indexOf("overlayBtn") >= 0){
				overlayBtn = classvalue;
			}
		});
		overlayTarget = '.' + overlayBtn.replace('Btn','');
		console.log(overlayTarget);

		if($(overlayTarget).css('display') == 'block'){
			$('#overlayContainer').slideUp(500);
			$('#overlayContainer > div').fadeOut(500);
		}
		else{
			$('#overlayContainer').slideUp(500);
			$('#overlayContainer > div').fadeOut(500);
			$(overlayTarget).parent('#overlayContainer').slideDown(500, function() {
				$(overlayTarget).fadeIn(500);
			});
			$('.nav').removeClass('active');
		}
		return false;
	});
	
//Module tabs
	$("a[class*='modlink']").click(function(){
		modBtn= $(this).attr('id').split(' ');
		$.each(modBtn, function(i, idvalue){
			if(idvalue.indexOf("modBtn") >= 0){
				modBtn = idvalue;
			}
		});
		modTarget = '#' + modBtn.replace('Btn','');
		console.log(modTarget);
		$('.modcontainer').hide();
		$(modTarget).show();
		headHeight = $('.headFiller').height();
		$('html,body').animate({
			scrollTop: $("#modules").offset().top - headHeight
		});
		return false;
	});

// OPEN LINK IN NEW WINDOW - SCROLL TO AND OPEN SECTION
	console.log(window.location.hash.substring(1).length);
	if(window.location.hash.substring(1).length > 0){
		hashtarget = window.location.hash.substring(1);
		headHeight = $('.headFiller').height();
		if($(hashtarget) !== null){
			$('html,body').animate({
				scrollTop: $('#' + hashtarget).position().top - headHeight
			});
		}
	}

//SVG Intergration
	jQuery('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		jQuery.get(imgURL, function(data) {
			var $svg = jQuery(data).find('svg');
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			 if(typeof imgClass !== 'undefined') {
				 $svg = $svg.attr('class', imgClass+' replaced-svg');
			 }
			 $svg = $svg.removeAttr('xmlns:a');
			 $img.replaceWith($svg);
		}, 'xml');
	});

//inject code from txt file
	$("#txtcode").load("txtcode.txt");



//style number with commas for everything with a class of "digits"
	$.fn.digits = function(){ 
		return this.each(function(){ 
			if ($(this).text().indexOf(".") !=-1){
				var parts = $(this).text().split(".");
				parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				parts[1] = parts[1].substring(0, 2);
				$(this).text(parts.join("."));
			}else{
				$(this).text( $(this).text().replace(/(\d)(?=([^.]{3})+($|[.]))/g,"$1,") );
			}
		})
	}
	$(".digits").digits();

//style number from with ordinal suffix for everything with a class of "ordinal". ex. 3 to 3rd, 13 to 13th
	$('.ordinal').each(function () {
		var lastChar = $(this).text().slice(-1);
		if (lastChar == 1 && $(this).text() != '11') {
			$('<sup>st</sup>').appendTo(this);
		}
		else if (lastChar == 2 && $(this).text() != '12') {
			$('<sup>nd</sup>').appendTo(this);
		}
		else if ((lastChar == 3 && $(this).text() != '13')) {
			$('<sup>rd</sup>').appendTo(this);
		}
		else {
			$('<sup>th</sup>').appendTo(this);
		}
	});

//limits inputs on text feilds to only Numbers for everything with a class of "numberOnly"
	jQuery.fn.forceNumeric = function () {
		return this.each(function () {
			$(this).keydown(function (e) {
				var key = e.which || e.keyCode;
				if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
				// numbers   
				key >= 48 && key <= 57 ||
				// Numeric keypad
				key >= 96 && key <= 105 ||
				// comma, period and minus, . on keypad
				key == 190 || key == 188 || key == 109 || key == 110 ||
				// Backspace and Tab and Enter
				key == 8 || key == 9 || key == 13 ||
				// Home and End
				key == 35 || key == 36 ||
				// left and right arrows
				key == 37 || key == 39 ||
				// Del and Ins
				key == 46 || key == 45)
				return true;
				return false;
			});
		});
	};
	$(".numberOnly").forceNumeric();

//Link refreshes page
	$('.btnRefresh').click(function(){
		location.reload();	
	});

//Accordian Function
	$('.collapseBtn').click(function(){
		$(this).next().slideToggle('slow');
			if ( $('span', this).text() == '▶' ) {
			$('span', this).text('▼');
			}
			else {
				$('span', this).text('▶');
			}
		return false;
	});

//Clone Element
	$(document).on('click', '.addAnotherBtn', function(){
		var addAnother = $(this).prev('.addAnother').html();
		$(this).prev('.addAnother').after("<div class='content addAnother'>"+addAnother+"</div>");
		return false;
	});
	

//Serialize Form on submit
	$( "form" ).on( "submit", function( event ) {
		event.preventDefault();
		$( this ).serialize();
		console.log( $( this ).serialize() );
	});

//Graphic Radio Button
	$(".graphic_radio a").click(function(){
		$(this).parents('.graphic_radio_container').find('a').removeClass('selected');
		$(this).addClass('selected');
		$(this).prev("input[type='radio']").click();
	});

//Force Radio button to be unchecked on load
	$('.radioReset').prop('checked', false);


	$(function() {
		$( ".sortable" ).sortable();
		$( ".sortable" ).disableSelection();
	});
	
//Form Wizard
	$('.formWizard').each(function(){
		if($('.formWizardSections' , this).length){
			$('.formWizardSections li').eq(0).children('a').addClass('fwSectionscurrent');
			$('.nextstep', this).click(function(){
				$(this).parents("form").find("input, textarea, select, button").addClass("ignore");
				$(this).parents("fieldset").find("input.required, textarea.required, select.required, button.required").removeClass("ignore");
				//if(!$(this).parents("form").valid()){
				//	return false;
				//}
				//else{
					$(this).parents('fieldset').hide().addClass('prevfs');
					$(this).parents('fieldset').next().show();
					fsNumber= $(this).parents('fieldset').next().attr('class').split(' ');
					$.each(fsNumber, function(i, val){
						if(val.indexOf("Section") >= 0){
							fsNumber = val;
							fsSection = fsNumber.replace('Section', '') - 1;
						}
					});
					$(this).closest('.formWizard').find('.formWizardSections li a').removeClass('fwSectionscurrent');
					$(this).closest('.formWizard').find('.formWizardSections li').each(function() {
						if( $(this).index() < fsSection ){
							$('a',this).addClass('fwSectionsprev');
						}
						if( $(this).index() == fsSection ){
							$('a',this).addClass('fwSectionscurrent');
						}
					});
				//}
			});
		
			$('.prevstep', this).click(function(){
				$(this).parents('fieldset').hide();
				$(this).parents('fieldset').prev().show().removeClass('prevfs');
				var fsNumber= $(this).parents('fieldset').prev().attr('class');
				var fsSection = fsNumber.replace('Section', '') - 1;
				$(this).closest('.formWizard').find('.formWizardSections a').removeClass('fwSectionscurrent').removeClass('fwSectionsprev');
				$(this).closest('.formWizard').find('.formWizardSections li').each(function() {
					if( $(this).index() < fsSection ){
						$('a',this).addClass('fwSectionsprev');
					}
					if( $(this).index() == fsSection ){
						$('a',this).addClass('fwSectionscurrent');
					}
				});
			});
		
			$('.formWizardSections', this).on('click', '.fwSectionsprev', function(){
				fsjumpto = $(this).parents('li').index() + 1;
				$(this).parents('.formWizard').find('fieldset').hide();
				$(this).parents('.formWizard').find('fieldset.Section' + fsjumpto).first().show().removeClass('prevfs');
				$(this).parents('.formWizard').find('fieldset.Section' + fsjumpto).first().nextAll().removeClass('prevfs');
				$(this).closest('.formWizard').find('.formWizardSections a').removeClass('fwSectionscurrent').removeClass('fwSectionsprev');
				$(this).addClass('fwSectionscurrent');
				var fsSection = $(this).parent('li').prevAll().size();
				$(this).closest('.formWizard').find('.formWizardSections li').each(function() {
					if( $(this).index() < fsSection ){
						$('a',this).addClass('fwSectionsprev');
					}
				});
			});
		}
		else if ($('.formWizardSteps' , this).length){
				$('.formWizardSteps li' , this).eq(0).children('a').addClass('fwStepscurrent');
			$('.nextstep', this).click(function(){
				$(this).parents("form").find("input, textarea, select, button").addClass("ignore");
				$(this).parents("fieldset").find(".required").removeClass("ignore");
				//if(!$(this).parents("form").valid()){
				//	return false;
				//}
				//else{
					console.log("valid");
					$(this).parents('fieldset').hide().addClass('prevfs');
					$(this).parents('fieldset').next().show();
					$(this).closest('.formWizard').find('.formWizardSteps li a').removeClass('fwStepscurrent');
					fspassed = $(this).parents('fieldset').prevAll().size();
					$(this).closest('.formWizard').find('.formWizardSteps li').each(function() {
						if( $(this).index() < fspassed ){
							$('a',this).addClass('fwStepsprev');
						}
						if( $(this).index() == fspassed ){
							$('a',this).addClass('fwStepscurrent');
						}
					});
				//}
			});
		
			$('.prevstep', this).click(function(){
				$(this).parents('fieldset').hide();
				$(this).parents('fieldset').prev().show().removeClass('prevfs');
				$(this).closest('.formWizard').find('.formWizardSteps a').removeClass('fwStepscurrent').removeClass('fwStepsprev');
				fspassed = $(this).parents('fieldset').prevAll('.prevfs').size();
				$(this).closest('.formWizard').find('.formWizardSteps li').each(function() {
					if( $(this).index() < fspassed ){
						$('a',this).addClass('fwStepsprev');
					}
					if( $(this).index() == fspassed ){
						$('a',this).addClass('fwStepscurrent');
					}
				});
			});
		
			$('.formWizardSteps', this).on('click', '.fwStepsprev', function(){
				fsjumpto = $(this).parents('li').index();
				$(this).parents('.formWizard').find('fieldset').hide();
				$(this).parents('.formWizard').find('fieldset').eq(fsjumpto).show().removeClass('prevfs');
				$(this).parents('.formWizard').find('fieldset').eq(fsjumpto).nextAll().removeClass('prevfs');
				$(this).closest('.formWizard').find('.formWizardSteps a').removeClass('fwStepscurrent').removeClass('fwStepsprev');
				$(this).addClass('fwStepscurrent');
				fspassed = $(this).parent('li').prevAll().size() + 1;
				$(this).closest('.formWizard').find('.formWizardSteps li').each(function() {
					if( $(this).index() < fspassed ){
						$('a',this).addClass('fwStepsprev');
					}
				});
			});
		}
	});

//detect IE Browsers
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf('MSIE ');
	var trident = ua.indexOf('Trident/');
	var edge = ua.indexOf('Edge/');
	
	if ( (msie > 0) || (edge > 0) || (trident > 0) ) {
		alert('Why are you using IE');
	}

//Send and Post message
	$('.messageSend').click(function(event){	
		if($.trim($(this).parents('form').find('textarea').val()) == ""){
			event.preventDefault();
			return false;
		}
		messagePosted = $(this).parents('.messageForm').find("textarea[name='message']").val();
		$('.messageForm').hide();
		$('.messageConfirm').show();
		$('.messagePosted').append(messagePosted);
	});

	
// Read More
    var showChar = 100; // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "read more";
    var lesstext = "read less";

	$('.readMore').each(function() {
		var content = $(this).html();
        if(content.length > showChar) {
            var previewtext = content.substr(0, showChar);
            var completetext = content.substr(showChar, content.length - showChar);
            var readMoreHTML = previewtext + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + completetext + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
            $(this).html(readMoreHTML);
        }
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

//Tooltip
	$('.masterTooltip').hover(function(){
            // Hover over code
            var title = $(this).attr('title');
            $(this).data('tipText', title).removeAttr('title');
            $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow');
       }, function() {
            // Hover out code
           $(this).attr('title', $(this).data('tipText'));
            $('.tooltip').remove();
       }).mousemove(function(e) {
           var mousex = e.pageX + 20; //Get X coordinates
            var mousey = e.pageY + 10; //Get Y coordinates
            $('.tooltip')
            .css({ top: mousey, left: mousex })
       });

});