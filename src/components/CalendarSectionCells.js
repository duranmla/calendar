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
        <CalendarCell type="" />
        <CalendarCell type="" />
        <CalendarCell number="1" type="weekday" />
        <CalendarCell number="2" type="weekday" />
        <CalendarCell number="3" type="weekday" />
        <CalendarCell number="4" type="weekday" />
        <CalendarCell number="5" type="weekend" />
        <CalendarCell number="6" type="weekend" />
        <CalendarCell number="7" type="weekday" />
        <CalendarCell number="8" type="weekday" />
        <CalendarCell number="9" type="weekday" />
        <CalendarCell number="10" type="weekday" />
        <CalendarCell number="11" type="weekday" />
        <CalendarCell number="12" type="weekend" />
        <CalendarCell number="13" type="weekend" />
        <CalendarCell number="14" type="weekday" />
        <CalendarCell number="15" type="weekday" />
        <CalendarCell number="16" type="weekday" />
        <CalendarCell number="17" type="weekday" />
        <CalendarCell number="18" type="weekday" />
        <CalendarCell number="19" type="weekend" />
        <CalendarCell number="20" type="weekend" />
        <CalendarCell number="21" type="weekday" />
        <CalendarCell number="22" type="weekday" />
        <CalendarCell number="23" type="weekday" />
        <CalendarCell number="24" type="weekday" />
        <CalendarCell number="25" type="weekday" />
        <CalendarCell number="26" type="weekend" />
        <CalendarCell number="27" type="weekend" />
        <CalendarCell number="28" type="weekday" />
        <CalendarCell number="29" type="weekday" />
        <CalendarCell number="30" type="weekday" />
        <CalendarCell number="31" type="weekday" />
        <CalendarCell type="" />
        <CalendarCell type="" />
      </div>
    );
  }
}

export default CalendarSectionCells;
