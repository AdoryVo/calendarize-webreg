// TODO: Check if user is on WebReg page

// Scrape the table
var table = document.getElementById('list-id-table')
var tableRows = Array.from(table.querySelector('tbody').children)
tableRows.shift() // Remove empty first row

// Organize rows by course
var courseRows = {}
var currentCourse = []
var prevCourseTitle = ''
tableRows.forEach((row, index) => {
  const courseTitle = row.firstElementChild.textContent.trim()

  if (courseTitle) {
    if (index !== 0) {
      // Found the first row of the next course - add the previous one!
      courseRows[prevCourseTitle] = currentCourse

      currentCourse = []
    }
    prevCourseTitle = courseTitle
  }

  currentCourse.push(row)
})
courseRows[prevCourseTitle] = currentCourse

// Compile course details from rows
function getText(row, label) {
  return row.querySelector(`[aria-describedby="${label}"]`).textContent.trim()
}

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
var DAY_MAP = {
  '0': 'SU',
  'M': 'MO',
  '2': 'TU',
  'W': 'WE',
  '4': 'TH',
  'F': 'FR',
  '6': 'SA',
}
var msPerDay = 24 * 60 * 60 * 1000 // Number of milliseconds per day
var msPer10Weeks = 10 * 7 * msPerDay

function toPrevSunday(date) {
  let dateObj = new Date(date)
  while (dateObj.getUTCDay() !== 0) {
    dateObj = new Date(dateObj - msPerDay)
  }

  return dateObj.toISOString().split('T')[0]
}

function daysToArray(days) {
  days = days.replace('Su', '0')
  days = days.replace('Tu', '2')
  days = days.replace('Th', '4')
  days = days.replace('Sa', '6')
  return days.split('').map((day) => DAY_MAP[day])
}

// eslint-disable-next-line no-undef
var cal = ics()
for (const courseTitle in courseEvents) {
  const events = courseEvents[courseTitle]
  const finalDate = events['FI'].days.split(' ')[1] // Ex: Splitting "W 12/07/2022"

  for (const eventType in events) {
    const eventTitle = `${courseTitle} - ${eventType}`
    const { days, location, time } = events[eventType]

    // Get start / finish times
    // TODO: Make start date match with one of the recurrence events
    const startDate = (eventType !== 'FI') ? toPrevSunday(new Date(finalDate) - msPer10Weeks) : finalDate
    const [startTime, endTime] = time.split('-').map((time) => time.slice(0, -1) + ' ' + time.slice(-1) + 'm')

    const begin = `${startDate} ${startTime}`
    const end = `${startDate} ${endTime}`

    if (eventType !== 'FI') {
      // Add recurring event rules
      const rrule = {}
      rrule.freq = 'WEEKLY'
      rrule.until = toPrevSunday(finalDate)
      rrule.byday = daysToArray(days)

      cal.addEvent(eventTitle, '', location, begin, end, rrule)
    } else {
      cal.addEvent(eventTitle, '', location, begin, end)
    }
  }
}
cal.download('Course Calendar')