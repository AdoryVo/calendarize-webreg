/* Begin: Utilities */
var DAY_MAP = {
  '0': 'SU',
  'M': 'MO',
  '2': 'TU',
  'W': 'WE',
  '4': 'TH',
  'F': 'FR',
  '6': 'SA',
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
var courseEvents = {}
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
(function createCalendar(){
  // Wait for ics & its dependencies to load
  if (typeof saveAs === 'undefined' || typeof ics === 'undefined') {
    console.log('Waiting for ICS dependencies...')
    setTimeout(createCalendar, 250)
  } else {
    // eslint-disable-next-line no-undef
    var cal = ics()
    for (const courseTitle in courseEvents) {
      const events = courseEvents[courseTitle]
      const finalDate = events['FI'].days.split(' ')[1] // Ex: Splitting "W 12/07/2022"

      for (const eventType in events) {
        const eventTitle = `${courseTitle} - ${eventType}`
        const { days, location, time } = events[eventType]

        // Get start / finish times
        const firstDay = daysToArray(days, { asNums: true })[0]
        const startDate = (eventType !== 'FI') ? toDayInWeek(new Date(finalDate) - MS_PER_10_WEEKS, firstDay) : finalDate
        const [startTime, endTime] = time.split('-').map((time) => time.slice(0, -1) + ' ' + time.slice(-1) + 'm')

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

    cal.download('Course Calendar')
  }
})()
/* End: Calendarize */