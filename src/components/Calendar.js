import React, { Component } from "react";
import "./Calendar.css";
import { CalendarBody, CalendarSection } from "./";

/**
 * common parent that will serve as a unified place to distribute options to render the
 * calendar as it is expected by the user
 * @extends Component
 */
class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <CalendarBody>
          <CalendarSection showGuidelines={true} />
        </CalendarBody>
      </div>
    );
  }
}

export default Calendar;
