import React, { Component } from "react";
import "./Calendar.css";
import { CalendarBody, CalendarSection } from "./";
import moment from "moment";

/**
 * common parent that will serve as a unified place to distribute options to render the
 * calendar as it is expected by the user
 * @extends Component
 */
class Calendar extends Component {
  _getSections({ startDate, endDate }) {
    let sections = [];
    let monthsToRender = endDate.diff(startDate, "months");

    if (monthsToRender < 0) return sections;

    let iterableDate = moment([
      startDate.year(),
      startDate.month(),
      startDate.date()
    ]);

    for (let i = 0; i <= monthsToRender; i++) {
      let props = {
        key: i,
        showGuidelines: i === 0,
        calendarRange: {
          start: startDate,
          end: endDate
        },
        month: iterableDate.month(),
        year: iterableDate.year()
      };

      sections.push(<CalendarSection {...props} />);

      // iterate over the months
      iterableDate.add(1, "months");
    }

    return sections;
  }

  render() {
    let startDate = moment([2018, 9, 2]);
    let endDate = moment([2019, 7, 7]);
    let sections = this._getSections({ startDate, endDate });

    return (
      <div className="calendar">
        <CalendarBody>{sections}</CalendarBody>
      </div>
    );
  }
}

export default Calendar;
