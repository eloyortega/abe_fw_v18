stickFunc = function(){
	$(".stickThis").removeClass("stickThis");
	//window width
	windowWidth = $(window).width();
	//element heights
	windowHeight = $(window).height();
	headerHeight = $('.headFiller').height();
	containerHeight = $('.columncontainer').height();
	sidebarHeight = $(".usercolumn").height();
	mainHeight = $(".maincontent").height();
	
	//element top and bottom coordinates in document
	containerDocTop = $('.columncontainer').offset().top;
	containerDocBottom = containerHeight + containerDocTop;
	containerPadBottom = $(".columncontainer").css('padding-bottom').replace('px','');
	containerPadBottom = parseInt(containerPadBottom);
	
	documentPosTop = $(window).scrollTop();
	containerPosTop = containerDocTop - documentPosTop;
	containerPosBottom = containerDocBottom + containerPadBottom - documentPosTop;
	
	$(".usercolumn , .maincontent").css({"top" : "inherit"});
	if(windowWidth <= 900){
		return false;
	} else{
		
		if (sidebarHeight < mainHeight){ $(".usercolumn").addClass("stickThis"); }
		else{ $(".maincontent").addClass("stickThis"); }
		
		stickThisHeight = $(".stickThis").height();
		stickThisDocTop = $('.stickThis').offset().top;
		stickThisDocBottom = stickThisHeight + stickThisDocTop;
		
		stickThisPadBottom = $(".stickThis").css('padding-bottom').replace('px','');
		stickThisPadBottom = parseInt(stickThisPadBottom);
		stickThisPadTop = $(".stickThis").css('padding-top').replace('px','');
		stickThisPadTop = parseInt(stickThisPadTop);
		
		//css value for longSticky top position when sticky effect is triggered
		longStickyFixedTop = windowHeight - stickThisHeight - stickThisPadBottom;
	
		stickThisPosTop = stickThisDocTop - documentPosTop;
		stickThisPosBottom = stickThisDocBottom - documentPosTop;
		
		documentPosTop = $(window).scrollTop();
		containerPosTop = containerDocTop - documentPosTop;
		containerPosBottom = containerDocBottom + containerPadBottom - documentPosTop;
		stickThisPosTop = stickThisDocTop - documentPosTop;
		stickThisPosBottom = stickThisDocBottom - documentPosTop;
		
		if(
			//top of container passed header
			containerPosTop <= 0 + headerHeight
		){
			if(
				//sticky height is longer than window & sticky passed bottom of window
				stickThisHeight > windowHeight - headerHeight &&
				stickThisPosBottom < windowHeight
			){
				if(
					//container is still below window
					containerPosBottom >= windowHeight
				){
					$(".stickThis").css({"top" : longStickyFixedTop - stickThisPosTop});
				}
				else{
					$(".stickThis").css({"top" : containerHeight - stickThisHeight - stickThisPadBottom -stickThisPadTop});
				}
			} else if(
				//sticky height is shorter than window & sticky passed header
				stickThisHeight < windowHeight - headerHeight &&
				stickThisPosTop <= 0 + headerHeight
			){
				if(
					containerPosBottom - stickThisPadBottom > stickThisPosBottom &&
					containerPosBottom - stickThisPadBottom -headerHeight > stickThisHeight
				){
					$(".stickThis").css({"top" : headerHeight - containerPadBottom - containerPosTop });
				}
				else{
					$(".stickThis").css({"top" : containerHeight - stickThisHeight - stickThisPadBottom -stickThisPadTop});
				}
			}
		} else{
			$(".stickThis").css({"top" : "inherit"});
		}
	}
};

$(window).load(function(){

	stickFunc();
		
	setInterval(function checkForChanges() {
		if (
			$('.columncontainer').height() != containerHeight ||
			$('.usercolumn').height() != sidebarHeight ||
			$('.maincontent').height() != mainHeight
		){
			$(".stickThis").removeClass("stickThis");
			stickFunc();
		}
	}, 500)
	
	$(window).resize(function(){ stickFunc(); });
	
	$(".columncontainer").resize(function(){ stickFunc(); });
	
	$(window).scroll(function(){ stickFunc();});
});

