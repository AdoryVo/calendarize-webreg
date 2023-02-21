# 📆 calendarize-webreg

A bookmarklet for easily exporting your WebReg schedule to a calendar.
- Adds your sections as recurring events
- Adds your finals as one time events
- *Uses [ics.js](https://github.com/nwcell/ics.js/) for .ics generation*

![Command line screenshot](assets/screenshot-cropped-v1.png)

## 📋 Instructions
1. Copy the entire code blurb below & add it as a new bookmark: `Ctrl+D` or `⌘+D`, click "More...", then paste the blurb in as the URL  
```js
javascript:(function(){const calendarize=document.createElement('script');calendarize.src='https://adoryvo.github.io/calendarize-webreg/calendarize.min.js';document.body.appendChild(calendarize);})()
```
2. Visit your WebReg page & click the bookmark to download your schedule as a calendar file (.ics)  
	(`Ctrl/⌘+Shift+B` to toggle bookmarks bar)
3. Import the calendar file into your Google Calendar [here](https://calendar.google.com/calendar/u/0/r/settings/export)
4. Double check that the events created for your sections & finals match the times on WebReg!

---
*Created by [Adory Vo](https://github.com/AdoryVo)*