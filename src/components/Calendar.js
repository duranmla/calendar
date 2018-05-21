import React, { Component } from "react";
import "./Calendar.css";
import {
  CalendarCell,
  CalendarBody,
  CalendarSection,
  CalendarSectionHeader,
  CalendarSectionColumnGuidelines,
  CalendarSectionCells
} from "./";

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <CalendarBody>
          <CalendarSection>
            <CalendarSectionColumnGuidelines />
            <CalendarSectionHeader />
            <CalendarSectionCells />
          </CalendarSection>
        </CalendarBody>
      </div>
    );
  }
}

export default Calendar;
