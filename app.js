$(window).load(function(){
	var timeOut = null;
	
	$('.arrow-next').click(function(e, simulated){
		if(!simulated){
			clearTimeout(timeOut);
		}
	});
	
	(function autoAdvance(){
		// Scheduling a time out in 3 seconds.
        timeOut = setTimeout(autoAdvance,3000);
        // Simulating a click on the next arrow.
        $('.arrow-next').trigger('click',[true]);
        
    })();
});

var main = function(){
	$('.arrow-next').click(function(){
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();
		
		if(nextSlide.length === 0){
			nextSlide = $('.slide').first();
		}
		
		$(currentSlide).hide();
		$(currentSlide).removeClass('active-slide');
		$(nextSlide).show();
		$(nextSlide).addClass('active-slide');
		
		var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        if(nextDot.next().length === 0){
            nextDot = $('.dot').first();
        }
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
	});
	
	$('.arrow-prev').click(function(){
		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev();
		
		if(prevSlide.length === 0){
			prevSlide = $('.slide').last();
		}
		
		$(currentSlide).hide();
		$(currentSlide).removeClass('active-slide');
		$(prevSlide).show();
		$(prevSlide).addClass('active-slide');
		
		var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        if(prevDot.prev().length === 0){
            prevDot = $('.dot').last();
        }
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
	});
};

$(document).ready(main);