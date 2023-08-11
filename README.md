**Export your WebReg schedule to your calendars in one click!**

![Calendarized schedule screenshot](assets/screenshot-cropped-v1.png)

Highlights:

- Adds your classes as recurring events
- Adds your finals as one time events
- Importable into calendar apps like Google Calendar, Outlook, etc.
- Tested on UCSD WebReg schedules
- Usage instructions below!

## 📋 Usage

### Bookmarklet

1. Copy the entire code blurb below & add it as a new bookmark: `Ctrl+D` or `⌘+D`, click "More...", then paste the blurb in as the URL:
   > `javascript:(function(){const calendarize=document.createElement('script');calendarize.src='https://adoryvo.github.io/calendarize-webreg/calendarize.min.js';document.body.appendChild(calendarize);})()`
2. Visit your WebReg page & click the bookmark to download your schedule as a calendar file (.ics)  
   (`Ctrl/⌘+Shift+B` to toggle bookmarks bar)
3. Import the calendar file into your Google Calendar [here](https://calendar.google.com/calendar/u/0/r/settings/export). _Make sure to check your intended Google Account in the top right!_
4. Double-check that the calendar events created match the times on WebReg!
   - If there are any inconsistencies or errors, fill out the [feedback form](https://forms.gle/nv2LUzE4SQ3fQVmX7). I will try to address them ASAP!

### Extension: Chrome, Edge, Brave (or other Chromium-based browsers)

1. Download the extension from the Chrome Web Store [here](https://chrome.google.com/webstore/detail/jloojoppodnaciefbgkokahoglmgpelf?hl=en&authuser=0)

- If your browser does not support the Chrome Web Store, follow these instructions to download the extension:
  1. Download `calendarize-webreg-chrome.zip` from the [latest release](https://github.com/AdoryVo/calendarize-webreg/releases)
  2. Extract (AKA unzip) the downloaded zip folder (via right click > `Extract All...`)
  3. Delete the `.zip` version and move your unzipped folder into a permanent, safe place
  4. In your browser, click the extensions icon (should look like a puzzle piece 🧩) and click `Manage extensions`
  5. Toggle `Developer Mode` on
  6. Click `Load Unpacked` and choose your unzipped folder from earlier
     > ⭐️ Make sure you keep the extension folder in a permanent, safe place (don't delete or move the folder after loading it)

2. Head to your WebReg page and click on the extension (you may have to dropdown the extensions menu 🧩). Voilà, your schedule is downloaded! 🎉
3. Import the calendar file into your Google Calendar [here](https://calendar.google.com/calendar/u/0/r/settings/export). _Make sure to check your intended Google Account in the top right!_
4. Double-check that the calendar events created match the times on WebReg!
   - If there are any inconsistencies or errors, fill out the [feedback form](https://forms.gle/nv2LUzE4SQ3fQVmX7). I will try to address them ASAP!
  
### Notes on Being in Different Timezones

If you're not in the Pacific Time (PT) Timezone, please change the timezone of your calendar to it before importing the iCal events.

## 🤔 How does it work?

When you click the bookmark or extension, your browser runs a script (AKA a program) that takes the text in your WebReg table, organizes it into your schedule information, and creates a `.ics` calendar file.

This type of script is called a [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet), an obscure technology that I found fitting to add accessibility for most browsers.
You may take a look at some other cool bookmarklets [here](https://caiorss.github.io/bookmarklets).

> ⭐️ Update: To further improve accessibility for browsers not supporting bookmarklets, we are introducing a browser extension option.

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

## 🔒 Privacy

If you have any concerns about privacy, the program does not collect or store any of your information (you may verify this with the [source code](https://github.com/AdoryVo/calendarize-webreg/blob/main/calendarize.js)).

## ⭐ See also

- UCSD Rocket Dev Team's web-based [WebReg Export App](https://www.webreg-export.com/), which uses OCR image scanning to parse your WebReg schedule
- OTApps' [Chrome Extension tool](https://chrome.google.com/webstore/detail/ucsd-schedule-to-calendar/haafakimhdpglinagaadlgebflifeiho?hl=en-US)
- Isaiah Dailey's command line tool, [Schtoics](https://github.com/isaiahtx/Schtoics)
- [Feedback & Bug Report Form](https://forms.gle/nv2LUzE4SQ3fQVmX7)

---

_[Source code](https://github.com/AdoryVo/calendarize-webreg) | Uses [ics.js](https://github.com/nwcell/ics.js/) for .ics generation_  
_Created by [Adory Vo](https://github.com/AdoryVo) with contributions from [Rebecca Chen](https://github.com/chenyenru)_
