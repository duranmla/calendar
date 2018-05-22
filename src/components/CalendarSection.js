import React, { Component } from "react";
import "./CalendarSection.css";
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
    const { showGuidelines, month, year, calendarRange } = this.props;
    let passProps = { month, year };

    return (
      <div className="calendar-section monthly">
        {showGuidelines ? <CalendarSectionColumnGuidelines /> : ""}
        <CalendarSectionHeader {...passProps} />
        <CalendarSectionCells {...passProps} calendarRange={calendarRange} />
      </div>
    );
  }
}

export default CalendarSection;
