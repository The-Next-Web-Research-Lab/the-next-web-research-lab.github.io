const addDay = require('./add-day')
const subtractDay = require('./subtract-day')
const diffDay = require('./diff-day')
const isLeapYear = require("./is-leap-year");
const toLastDay = require("./to-last-day");
const toDayIndex = require("./to-day-index");

module.exports = {
  addDay,
  subtractDay,
  diffDay,
  isLeapYear,
  toLastDay,
  toDayIndex
}