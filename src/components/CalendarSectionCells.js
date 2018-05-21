import React, { Component } from "react";
import CalendarCell from "./CalendarCell.js";
import "./CalendarSectionCells.css";

/**
 * component that will handle the logic of behind the rendering of the cells properly.
 * dictaminates the state of the cell to be rendered and the amount of cells to be rendered
 * @extends Component
 */
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
