import _ from "lodash";

export function filterHolidaysByDate({ day, year, month }, holidays) {
  // moment handle monthIndex starting from 0, so we need to overcome that by adding one
  let monthIndex = month + 1;

  return _.find(holidays, h => {
    let splittedDate = h.date.split("-");
    return (
      +splittedDate[0] === year &&
      +splittedDate[1] === monthIndex &&
      +splittedDate[2] === day
    );
  });
}
