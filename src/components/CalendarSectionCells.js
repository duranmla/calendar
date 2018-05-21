import React, { Component } from "react";
import CalendarCell from "./CalendarCell.js";
import "./CalendarSectionCells.css";

class CalendarSectionCells extends Component {
  render() {
    return (
      <div className="calendar-section__cells">
        <CalendarCell />
        <CalendarCell />
        <CalendarCell />
        <CalendarCell />
      </div>
    );
  }
}

export default CalendarSectionCells;
