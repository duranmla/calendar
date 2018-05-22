import HolidayAPI from "node-holidayapi";
import moment from "moment";

const hapi = new HolidayAPI("ee6ef128-e482-4cd6-94a4-449f96c3a719").v1;

export function getHolidaysByDate({ year, month }, country) {
  const parameters = {
    country,
    year,
    month
  };

  // Avoid errors as the API doesn't allow us to fetch future holidays
  let todaysDate = moment();
  let monthIndex = todaysDate.month() + 1;

  if (
    todaysDate.year() < year ||
    (todaysDate.year() === year && monthIndex <= month) ||
    !country
  ) {
    return Promise.resolve({});
  }

  return new Promise((resolve, reject) => {
    hapi.holidays(parameters, (err, data) => {
      return resolve({ data, err });
    });
  });
}
