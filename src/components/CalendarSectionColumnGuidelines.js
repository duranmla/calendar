import React, { Component } from "react";
import moment from "moment";
import "./CalendarSectionColumnGuidelines.css";

/**
 * Basically this component will be the one that give visual context to
 * of each of the columns within the calendar section, for a calendar displaying months
 * sections this will display the days of the week.
 * @extends Component
 */
class CalendarSectionColumnGuidelines extends Component {
  _getWeekdays() {
    return moment.weekdays().map((day, i) => (
      <div key={i} className="day">
        {day.charAt(0)}
      </div>
    ));
  }
  render() {
    let weekdays = this._getWeekdays();

    return (
      <div className="calendar-section__column-guidelines">{weekdays}</div>
    );
  }
}

export default CalendarSectionColumnGuidelines;
