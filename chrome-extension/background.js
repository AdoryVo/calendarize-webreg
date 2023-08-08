/** @type {import('chrome-types')} */
/* global chrome */

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['calendarize.min.js'],
  })
})
