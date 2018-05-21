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
    return (
      <div className="calendar-section">
        <CalendarSectionColumnGuidelines />
        <CalendarSectionHeader />
        <CalendarSectionCells />
      </div>
    );
  }
}

export default CalendarSection;
