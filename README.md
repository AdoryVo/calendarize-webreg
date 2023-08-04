A tool to export your WebReg schedule to your calendars in one click.

![Command line screenshot](assets/screenshot-cropped-v1.png)

- Adds your classes as recurring events
- Adds your finals as one time events
- Importable into calendar apps like Google Calendar, Outlook, etc.
- Tested on UCSD WebReg schedules
- Usage instructions below!



## 📋 Installations

### Extension: Chrome, MS Edge or Brave

1. Download the extension:
   (a) Download a hard copy of the zip file from the [Release page](https://github.com/AdoryVo/calendarize-webreg/releases), or
   (b) Clone this repo
2. Unzip the folder
3. On your browser, enable `Developer Mode`
4. Select "Load Unpacked" and choose the unzipped folder `calendarize-webreg-chrome-extension`
5. Head to your WebReg page and click on the extension. Voilà, your schedule is downloaded 🎉
6. Import the calendar file into your Google Calendar [here](https://calendar.google.com/calendar/u/0/r/settings/export)
7. Double-check that the calendar events created match the times on WebReg!
   - If you see any inconsistencies or errors, report them in our feedback form in the [**See Also**](#⭐-see-also) section below. I will try to address them ASAP!

> ⭐️ Make sure you keep the extension folder in a permanent, safe place (AKA don't delete or move the folder after loading it)

### Bookmarklet

1. Copy the entire code blurb below & add it as a new bookmark: `Ctrl+D` or `⌘+D`, click "More...", then paste the blurb in as the URL:
   > `javascript:(function(){const calendarize=document.createElement('script');calendarize.src='https://adoryvo.github.io/calendarize-webreg/calendarize.min.js';document.body.appendChild(calendarize);})()`
2. Visit your WebReg page & click the bookmark to download your schedule as a calendar file (.ics)  
   (`Ctrl/⌘+Shift+B` to toggle bookmarks bar)
3. Import the calendar file into your Google Calendar [here](https://calendar.google.com/calendar/u/0/r/settings/export)
4. Double-check that the calendar events created match the times on WebReg!
   - If there are any inconsistencies or errors, fill out the [feedback form](https://forms.gle/nv2LUzE4SQ3fQVmX7). I will try to address them ASAP!

## 🤔 How does it work?

When you click the bookmark or extension, your browser runs a script (AKA a program) that takes the text in your WebReg table, organizes your schedule information, and creates a `.ics` calendar file.

This form of bookmark is called [Bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet), an obscure technology that I found
fitting to add accessibility for most browsers.
You may take a look at some other cool bookmarklets [here](https://caiorss.github.io/bookmarklets).

> ⭐️ Update: To further improve accessibility for browsers not supporting bookmarklets, we are now introducing the Browser Extension version.


```js
// This code will be executed upon clicking the bookmark
javascript: (function () {
  // Fetch the script used to scrape & parse schedule information from the web page
  const calendarize = document.createElement('script')
  calendarize.src =
    'https://adoryvo.github.io/calendarize-webreg/calendarize.min.js'

  // Add the script to the current page, causing it to run!
  document.body.appendChild(calendarize)
})()
```
> The bookmark code blurb, formatted

## Privacy
If you have any concerns about privacy, keep in mind that the program only uses the data during operation and does not collect them (you may verify this with the [source code](https://github.com/AdoryVo/calendarize-webreg)).


## ⭐ See also

- UCSD Rocket Dev Team's web-based [WebReg Export App](https://www.webreg-export.com/), which uses OCR image scanning to parse your WebReg schedule
- OTApps' [Chrome Extension tool](https://chrome.google.com/webstore/detail/ucsd-schedule-to-calendar/haafakimhdpglinagaadlgebflifeiho?hl=en-US)
- Isaiah Dailey's command line tool, [Schtoics](https://github.com/isaiahtx/Schtoics)
- [Feedback & Bug Report Form](https://forms.gle/nv2LUzE4SQ3fQVmX7)

---

_[Source code](https://github.com/AdoryVo/calendarize-webreg) | Uses [ics.js](https://github.com/nwcell/ics.js/) for .ics generation_  
_Created by [Adory Vo](https://github.com/AdoryVo)_
