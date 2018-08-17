	$(document).ready(function() {
	
		//START NEXT/PREV FUNCTIONALITY
		countQuizQ = $('.quizQuestion').size();
		currentQuizQ = 1;
		nextQuizQ = 2;
		prevQuizQ = countQuizQ;
		$('.prevQuizQ, .quizControlBreaker').hide();
	
		$('.nextQuizQ').click(function () {
			if($('#quizSlide' + currentQuizQ+' input:checked').length){
				correctAns= $('#quizSlide' + currentQuizQ+' .quizRightAns').size();
				checkedCorrectAnswer = $('#quizSlide' + currentQuizQ+' .quizRightAns:checked').size();
				if($('#quizSlide' + currentQuizQ+' .quizWrongAns:checked').length || checkedCorrectAnswer < correctAns){
					$('.quizLife:last').removeClass('quizLife');
				}
				$('#quizSlide' + currentQuizQ).hide();
				$('#quizSlide' + nextQuizQ).fadeIn('slow');
				prevQuizQ = nextQuizQ - 1;
				currentQuizQ = nextQuizQ;
				nextQuizQ = nextQuizQ + 1;
				$('.pageQuizQ').empty();
				$('.pageQuizQ').text(currentQuizQ);
				if (nextQuizQ > (countQuizQ + 1)){
					$('#quiz').hide();
					$('.quizCompleteConfirm').show();
					if($('.quizLife').length){
						$('.quizSuccess').show();
						$('.quizFail').hide();
					}
					else {
						$('.quizSuccess').hide();
						$('.quizFail').show();
					}
				}
				if (currentQuizQ == 0){
					currentQuizQ = countQuizQ;
				}
				return false;
			}
		});
	
		$('.pageQuizQ').empty();
		$('.pageQuizQ').text(currentQuizQ);
	
		var total = $('.sizeQuizQ');
		total.text(countQuizQ);
	});