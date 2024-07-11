// Type a function isWeekend that takes the day of the week from enumDayOfWeek and returns a boolean value indicating whether it is a weekday or a weekend
// enum DayOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }

// const isWeekend = (day) => {};
enum DaysOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

function isWeekend(day: DaysOfWeek): boolean {
  if (day === DaysOfWeek.Sunday || day === DaysOfWeek.Saturday) {
    return true;
  } else {
    return false;
  }
}
export {};
