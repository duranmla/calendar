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

    // currently it only support one year
    for (let i = 0; i <= monthsToRender; i++) {
      let props = {
        key: i,
        showGuidelines: i === 0,
        calendarRange: {
          start: startDate,
          end: endDate
        },
        month: startDate.month() + i,
        year: startDate.year()
      };

      sections.push(<CalendarSection {...props} />);
    }

    return sections;
  }

  render() {
    let startDate = moment([2018, 4, 10]); // ~ May 10, 2018
    let endDate = moment([2018, 6, 20]); // ~ July 20, 2018
    let sections = this._getSections({ startDate, endDate });

    return (
      <div className="calendar">
        <CalendarBody>{sections}</CalendarBody>
      </div>
    );
  }
}

export default Calendar;
