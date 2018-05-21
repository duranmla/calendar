import React, { Component } from "react";
import "./CalendarSectionColumnGuidelines.css";

/**
 * Basically this component will be the one that give visual context to
 * of each of the columns within the calendar section, for a calendar displaying months
 * sections this will display the days of the week.
 * @extends Component
 */
class CalendarSectionColumnGuidelines extends Component {
  render() {
    return (
      <div className="calendar-section__column-guidelines">
        <div className="day">S</div>
        <div className="day">M</div>
        <div className="day">T</div>
        <div className="day">W</div>
        <div className="day">T</div>
        <div className="day">F</div>
        <div className="day">S</div>
      </div>
    );
  }
}

export default CalendarSectionColumnGuidelines;
