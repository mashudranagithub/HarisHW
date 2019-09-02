$('.calendar').pignoseCalendar({
	scheduleOptions: {
		colors: {
		    offer: '#2fabb7',
			ad: '#5c6270'
		}
	},
	schedules: [{
		name: 'offer',
	    date: '2019-08-21'
	}, {
		name: 'ad',
	    date: '2019-08-22'
	}, {
		name: 'offer',
	    date: '2017-02-05',
	}],
	select: function(date, context) {
		console.log('events for this date', context.storage.schedules);
	}
});

$(function() {
    $('.calendar').pignoseCalendar({
		enabledDates: [
			'2019-08-20',
			'2019-08-21',
			'2019-08-22',
			'2019-08-23',
			'2019-08-26',
			'2019-08-27',
			'2019-08-28',
			'2019-08-29',
			'2019-08-30',
			'2019-09-02',
			'2019-09-03',
		],
		disabledWeekdays: [0, 6], // SUN (0), SAT (6)
	});
});


// jquery codes for showing the time when click on the date
$( document ).ready(function() {
	// $('.time_confirm').hide();
	$('.confirm_button').hide();

    $(".pignose-calendar-unit:not(.pignose-calendar-unit-disabled)").click(function(){
    	$('.content.content_with_ribbon').parent().removeClass('col-md-5');
    	$('.content').parent().removeClass('offset-md-1');
    	$('.content.content_with_ribbon').parent().addClass('col-md-7');
    	$('.calendar').css({"width":"70%", "margin": "0px"});
    	$('.time_confirm').css("width", "28%");
		$('.time_confirm').show(500);
    });



    $(".time_button").click(function(){

		$('.confirm_button').hide();
		$('.time_button').css({
			"width":"100%",
			"background":"transparent",
			"transition":"ease 0.5s",
		});
    	$(this).siblings('.confirm_button').show(500).css({
			"float":"right",
			"background":"#4a91e9",
			"color":"#fff",
    	});
    	$(this).siblings('.confirm_button').addClass("half_width");
    	$(this).css({
			"width":"49%",
			"float":"left",
			"background":"#333",
			"color":"#fff",
    	});
    });
});