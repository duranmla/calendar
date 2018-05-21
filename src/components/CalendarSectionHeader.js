import React, { Component } from "react";
import "./CalendarSectionHeader.css";

/**
 * Each of the section as a header label, for a calendar displaying months this
 * will represent the month name (January, February...)
 * @extends Component
 */
class CalendarSectionHeader extends Component {
  render() {
    return (
      <div className="calendar-section__header">
        <strong>May 2018</strong>
      </div>
    );
  }
}

export default CalendarSectionHeader;
