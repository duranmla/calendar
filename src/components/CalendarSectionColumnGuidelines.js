import React, { Component } from "react";
import "./CalendarSectionHeader.css";

/**
 * Basically this component will be the one that give visual context to
 * of each of the columns within the calendar section, for a calendar displaying months
 * sections this will display the days of the week.
 * @extends Component
 */
class CalendarSectionHeader extends Component {
  render() {
    return (
      <div className="calendar-section__column-guidelines">
        column guidelines
      </div>
    );
  }
}

export default CalendarSectionHeader;
