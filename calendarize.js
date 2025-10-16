/* Begin: Dependencies (FileSaver, ics.js) */
/* eslint-disable */
// prettier-ignore
var saveAs=saveAs||function(e){'use strict';if(typeof e==='undefined'||typeof navigator!=='undefined'&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document, n=function(){return e.URL||e.webkitURL||e}, r=t.createElementNS('http://www.w3.org/1999/xhtml', 'a'), o='download'in r, a=function(e){var t=new MouseEvent('click');e.dispatchEvent(t)}, i=/constructor/i.test(e.HTMLElement)||e.safari, f=/CriOS\/[\d]+/.test(navigator.userAgent), u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t}, 0)}, s='application/octet-stream', d=1e3*40, c=function(e){var t=function(){if(typeof e==='string'){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t, d)}, l=function(e, t, n){t=[].concat(t);var r=t.length;while(r--){var o=e['on'+t[r]];if(typeof o==='function'){try{o.call(e, n||e)}catch(a){u(a)}}}}, p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279), e], { type:e.type })}return e}, v=function(t, u, d){if(!d){t=p(t)}var v=this, w=t.type, m=w===s, y, h=function(){l(v, 'writestart progress write writeend'.split(' '))}, S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/, 'data:attachment/file;');var n=e.open(t, '_blank');if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y, '_blank');if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()}, w=v.prototype, m=function(e, t, n){return new v(e, t||e.name||'download', n)};if(typeof navigator!=='undefined'&&navigator.msSaveOrOpenBlob){return function(e, t, n){t=t||e.name||'download';if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e, t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=='undefined'&&self||typeof window!=='undefined'&&window||this.content);
// prettier-ignore
if(typeof module!=='undefined'&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=='undefined'&&define!==null&&define.amd!==null){define('FileSaver.js', function(){return saveAs})}
// prettier-ignore
var ics=function(e, t){'use strict';{if(!(navigator.userAgent.indexOf('MSIE')>-1&&-1==navigator.userAgent.indexOf('MSIE 10'))){void 0===e&&(e='default'), void 0===t&&(t='Calendar');var r=-1!==navigator.appVersion.indexOf('Win')?'\r\n':'\n', n=[], i=['BEGIN:VCALENDAR', 'PRODID:'+t, 'VERSION:2.0'].join(r), o=r+'END:VCALENDAR', a=['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];return{
  events:function(){return n}, calendar:function(){return i+r+n.join(r)+o}, addEvent:function(t, i, o, l, u, s){if(void 0===t||void 0===i||void 0===o||void 0===l||void 0===u)return!1;if(s&&!s.rrule){if('YEARLY'!==s.freq&&'MONTHLY'!==s.freq&&'WEEKLY'!==s.freq&&'DAILY'!==s.freq)throw"Recurrence rrule frequency must be provided and be one of the following: 'YEARLY', 'MONTHLY', 'WEEKLY', or 'DAILY'";if(s.until&&isNaN(Date.parse(s.until)))throw"Recurrence rrule 'until' must be a valid date string";if(s.interval&&isNaN(parseInt(s.interval)))throw"Recurrence rrule 'interval' must be an integer";if(s.count&&isNaN(parseInt(s.count)))throw"Recurrence rrule 'count' must be an integer";if(void 0!==s.byday){if('[object Array]'!==Object.prototype.toString.call(s.byday))throw"Recurrence rrule 'byday' must be an array";if(s.byday.length>7)throw"Recurrence rrule 'byday' array must not be longer than the 7 days in a week";s.byday=s.byday.filter(function(e, t){return s.byday.indexOf(e)==t});for(var c in s.byday)if(a.indexOf(s.byday[c])<0)throw"Recurrence rrule 'byday' values must include only the following: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'"}}var g=new Date(l), d=new Date(u), f=new Date, S=('0000'+g.getFullYear().toString()).slice(-4), E=('00'+(g.getMonth()+1).toString()).slice(-2), v=('00'+g.getDate().toString()).slice(-2), y=('00'+g.getHours().toString()).slice(-2), A=('00'+g.getMinutes().toString()).slice(-2), T=('00'+g.getSeconds().toString()).slice(-2), b=('0000'+d.getFullYear().toString()).slice(-4), D=('00'+(d.getMonth()+1).toString()).slice(-2), N=('00'+d.getDate().toString()).slice(-2), h=('00'+d.getHours().toString()).slice(-2), I=('00'+d.getMinutes().toString()).slice(-2), R=('00'+d.getMinutes().toString()).slice(-2), M=('0000'+f.getFullYear().toString()).slice(-4), w=('00'+(f.getMonth()+1).toString()).slice(-2), L=('00'+f.getDate().toString()).slice(-2), O=('00'+f.getHours().toString()).slice(-2), p=('00'+f.getMinutes().toString()).slice(-2), Y=('00'+f.getMinutes().toString()).slice(-2), U='', V='';y+A+T+h+I+R!=0&&(U='T'+y+A+T, V='T'+h+I+R);var B, C=S+E+v+U, j=b+D+N+V, m=M+w+L+('T'+O+p+Y);if(s)if(s.rrule)B=s.rrule;else{if(B='rrule:FREQ='+s.freq, s.until){var x=new Date(Date.parse(s.until)).toISOString();B+=';UNTIL='+x.substring(0, x.length-13).replace(/[-]/g, '')+'000000Z'}s.interval&&(B+=';INTERVAL='+s.interval), s.count&&(B+=';COUNT='+s.count), s.byday&&s.byday.length>0&&(B+=';BYDAY='+s.byday.join(','))}(new Date).toISOString();var H=['BEGIN:VEVENT', 'UID:'+n.length+'@'+e, 'CLASS:PUBLIC', 'DESCRIPTION:'+i, 'DTSTAMP;VALUE=DATE-TIME:'+m, 'DTSTART;VALUE=DATE-TIME:'+C, 'DTEND;VALUE=DATE-TIME:'+j, 'LOCATION:'+o, 'SUMMARY;LANGUAGE=en-us:'+t, 'TRANSP:TRANSPARENT', 'END:VEVENT'];return B&&H.splice(4, 0, B), H=H.join(r), n.push(H), H}, download:function(e, t){if(n.length<1)return!1;t=void 0!==t?t:'.ics', e=void 0!==e?e:'calendar';var a, l=i+r+n.join(r)+o;if(-1===navigator.userAgent.indexOf('MSIE 10'))a=new Blob([l]);else{var u=new BlobBuilder;u.append(l), a=u.getBlob('text/x-vCalendar;charset='+document.characterSet)}return saveAs(a, e+t), l}, build:function(){return!(n.length<1)&&i+r+n.join(r)+o},
}}console.log('Unsupported Browser')}}
/* eslint-enable */
/* End: Dependencies */

/* Begin: Utilities */
var EVENT_LINE_SEPARATOR =
  navigator.appVersion.indexOf('Win') !== -1 ? '\r\n' : '\n'
var DAY_MAP = {
  0: 'SU',
  M: 'MO',
  2: 'TU',
  W: 'WE',
  4: 'TH',
  F: 'FR',
  6: 'SA',
}
var MS_PER_DAY = 24 * 60 * 60 * 1000 // Number of milliseconds per day
var MS_PER_10_WEEKS = 10 * 7 * MS_PER_DAY

/** Scrape text from a labeled column in a table row */
function getText(row, label) {
  const element = row.querySelector(`[aria-describedby="${label}"]`)
  if (!element) {
    alert('The WebReg table does not follow the expected format!')
    throw Error(`No element with label ${label} could be found!`)
  }

  return element.textContent.trim()
}

/** Moves a date backwards until a certain day in the week */
function toDayInWeek(date, dayInWeek) {
  let dateObj = new Date(date)
  while (dateObj.getUTCDay() !== dayInWeek) {
    dateObj = new Date(dateObj - MS_PER_DAY)
  }

  return dateObj.toISOString().split('T')[0]
}

/** Converts WebReg days to ics days array */
function daysToArray(days, options = { asNums: false }) {
  days = days.replace('Su', '0')
  days = days.replace('Tu', '2')
  days = days.replace('Th', '4')
  days = days.replace('Sa', '6')
  if (options.asNums) {
    days = days.replace('M', '1')
    days = days.replace('W', '3')
    days = days.replace('F', '5')
    return days.split('').map((day) => parseInt(day))
  }

  return days.split('').map((day) => DAY_MAP[day]) // Converts "TuTh" to ["2", "4"] to ["TU", "TH"]
}
/* End: Utilities */

/* Begin: Calendarize! */
// Scrape the table if it exists
var table = document.getElementById('list-id-table')
if (!table) {
  alert('The WebReg table could not be found on this page!')
  throw Error('No table with id #list-id-table could be found!')
}
var tableRows = Array.from(table.querySelector('tbody').children)
tableRows.shift() // Remove empty first row

// Organize rows by course
var courseRows = {} // [course title]: [rows of data in course]
var currentCourse = []
var prevCourseTitle = ''
tableRows.forEach((row, index) => {
  const courseTitle = row.firstElementChild.textContent.trim()

  if (courseTitle) {
    if (index !== 0) {
      // Found the first row of the next course,
      // store all of the gathered data for the current course
      courseRows[prevCourseTitle] = currentCourse

      currentCourse = []
    }
    prevCourseTitle = courseTitle
  }

  currentCourse.push(row)
})
courseRows[prevCourseTitle] = currentCourse

// Compile course details from rows
var courseEvents = {} // Events represent events on the calendar
for (const courseTitle in courseRows) {
  const events = {}

  const rows = courseRows[courseTitle]
  rows.forEach((row) => {
    const rowType = getText(row, 'list-id-table_FK_CDI_INSTR_TYPE') // LE, DI, FI, etc.
    const rowDetails = {}

    rowDetails['days'] = getText(row, 'list-id-table_DAY_CODE')
    rowDetails['time'] = getText(row, 'list-id-table_coltime')

    const building = getText(row, 'list-id-table_BLDG_CODE')
    const room = getText(row, 'list-id-table_ROOM_CODE')
    rowDetails['location'] = `${building} ${room}`

    events[rowType] = rowDetails
  })

  courseEvents[courseTitle] = events
}

// Create calendar file (.ics)
var cal = ics()
for (const courseTitle in courseEvents) {
  const events = courseEvents[courseTitle]
  // FI is TBA - cannot create event
  if (!events.hasOwnProperty('FI')) {
    continue
  }

  const finalDate = events['FI'].days.split(' ')[1] // Ex: Splitting "W 12/07/2022"

  for (const eventType in events) {
    const eventTitle = `${courseTitle} - ${eventType}`
    const { days, location, time } = events[eventType]

    // Days or time is TBA - cannot create event
    if (days === 'TBA' || time === 'TBA') {
      continue
    }

    // Get start / finish times
    const firstDay = daysToArray(days, { asNums: true })[0]
    const startDate =
      eventType !== 'FI'
        ? toDayInWeek(new Date(finalDate) - MS_PER_10_WEEKS, firstDay)
        : finalDate
    const [startTime, endTime] = time
      .split('-')
      .map((time) => time.slice(0, -1) + ' ' + time.slice(-1) + 'm')

    const begin = `${startDate} ${startTime}`
    const end = `${startDate} ${endTime}`

    if (eventType !== 'FI') {
      // Add recurring event rules
      const rrule = {}
      rrule.freq = 'WEEKLY'
      rrule.until = toDayInWeek(finalDate, 0) // Finish classes on Sunday before finals
      rrule.byday = daysToArray(days)

      cal.addEvent(eventTitle, '', location, begin, end, rrule)
    } else {
      cal.addEvent(eventTitle, '', location, begin, end)
    }
  }
}

// Remove events starting with UID for Google Calendar compatibility
var newEvents = cal.events().map((eventLines) =>
  eventLines
    .split(EVENT_LINE_SEPARATOR)
    .filter((eventLine) => !eventLine.startsWith('UID'))
    .join(EVENT_LINE_SEPARATOR)
)
cal.events().splice(0, cal.events().length)
cal.events().splice(0, 0, ...newEvents)

cal.download('Course Calendar')
/* End: Calendarize */
