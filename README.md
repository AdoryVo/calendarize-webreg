# calendarize-webreg

Drag the link below into your bookmark bar & click it on your WebReg page to download your schedule as a calendar file (.ics).  
Then, import the calendar file into your Google Calendar [here](https://calendar.google.com/calendar/u/0/r/settings/export).  
**Link to bookmark:**
<a
	href="javascript:(function() {
			var icsDeps = document.createElement('script');
			icsDeps.src = 'https://adoryvo.github.io/calendarize-webreg/ics.deps.min.js';
			document.body.appendChild(icsDeps);
			var ics = document.createElement('script');
			ics.src = 'https://adoryvo.github.io/calendarize-webreg/ics.min.js';
			document.body.appendChild(ics);
			var calendarize = document.createElement('script');
			calendarize.src = 'https://adoryvo.github.io/calendarize-webreg/calendarize.js';
			document.body.appendChild(calendarize);
		 })();"
	>
		Calendarize WebReg!
</a>