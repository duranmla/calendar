import React, { Component } from "react";
import "./CalendarSection.css";
import moment from "moment";
import {
  CalendarSectionHeader,
  CalendarSectionColumnGuidelines,
  CalendarSectionCells
} from "./";

/**
 * container for an entire unit within the calendar, whenever the Calendar
 * displays months a unit will be equivalent to one month.
 * @extends Component
 */
class CalendarSection extends Component {
  render() {
    const { showGuidelines, month, year } = this.props;
    const targetMonth = moment([year, month]);
    const offset = targetMonth.startOf("month").weekday();
    const totalCells = targetMonth.daysInMonth();

    return (
      <div className="calendar-section monthly">
        {showGuidelines ? <CalendarSectionColumnGuidelines /> : ""}
        <CalendarSectionHeader month={month} year={year} />
        <CalendarSectionCells offset={offset} totalCells={totalCells} />
      </div>
    );
  }
}

export default CalendarSection;
