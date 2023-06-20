const timePicker = toTimeOptions({
  baseDate: new Date('2020-04-16T00:00:00'),
  minTime: new Date('2020-04-16T08:20:00'),
  maxTime: new Date('2020-04-16T14:50:00'),
});

console.log(timePicker.hoursOptions.map(date => date.getHours()));
// [8, 9, 10, 11, 12, 13, 14]
timePicker.hours = 8;
console.log(timePicker.minutesOptions.map(date => date.getMinutes()));
// [20, 30, 40, 50]
