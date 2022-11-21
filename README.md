# calendarize-webreg

Copy & paste the code below as a URL into your bookmark bar & click the bookmark on your WebReg page to download your schedule as a calendar file (.ics).  
Then, import the calendar file into your Google Calendar [here](https://calendar.google.com/calendar/u/0/r/settings/export).  
**Link to bookmark:**
```js
javascript:(function(){const icsDeps=document.createElement('script');icsDeps.src='ics.deps.min.js';document.body.appendChild(icsDeps);const ics=document.createElement('script');ics.src='ics.min.js';document.body.appendChild(ics);const calendarize=document.createElement('script');calendarize.src='calendarize.js';document.body.appendChild(calendarize)})()
```
