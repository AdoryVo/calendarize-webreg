// This code will be executed upon clicking the bookmark
javascript:(function() {
	// Fetch the script used to scrape & parse schedule information from the web page 
	const calendarize = document.createElement('script');
	calendarize.src = 'https://adoryvo.github.io/calendarize-webreg/calendarize.min.js';

	// Add the script to the current page, causing it to run!
	document.body.appendChild(calendarize);
})()