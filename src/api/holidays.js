import HolidayAPI from "node-holidayapi";

const hapi = new HolidayAPI("ee6ef128-e482-4cd6-94a4-449f96c3a719").v1;

export function getHolidaysByDate({ year, month }, country) {
  const parameters = {
    country,
    year,
    month
  };

  return new Promise((resolve, reject) => {
    hapi.holidays(parameters, (err, data) => {
      return resolve({ data, err });
    });
  });
}
