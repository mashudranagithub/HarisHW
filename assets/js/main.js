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
		],
		disabledWeekdays: [0, 6], // SUN (0), SAT (6)
	});
});