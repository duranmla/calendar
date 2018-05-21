import React, { Component } from "react";
import CalendarCell from "./CalendarCell.js";
import "./CalendarSectionCells.css";
import moment from "moment";

/**
 * component that will handle the logic of behind the rendering of the cells properly.
 * dictaminates the state of the cell to be rendered and the amount of cells to be rendered
 * @extends Component
 */
class CalendarSectionCells extends Component {
  _getCellBasicData(day, { year, month }) {
    let weekdayIndex = moment([year, month, day]).weekday();
    let isWeekend = weekdayIndex === 0 || weekdayIndex === 6;
    return {
      type: isWeekend ? "weekend" : "weekday",
      number: day
    };
  }

  _getCells({ offset, totalCells }) {
    let cells = [];

    for (let j = 0; j < offset; j++) {
      cells.push(<CalendarCell key={`offset-${j}`} />);
    }

    for (let dayIndex = 0; dayIndex < totalCells; dayIndex++) {
      let data = this._getCellBasicData(dayIndex + 1, this.props);
      let props = {
        key: dayIndex,
        ...data
      };

      cells.push(<CalendarCell {...props} />);
    }

    return cells;
  }

  _getBoundaries({ year, month }) {
    const targetMonth = moment([year, month]);
    const offset = targetMonth.startOf("month").weekday();
    const totalCells = targetMonth.daysInMonth();

    return {
      offset,
      totalCells
    };
  }

  render() {
    const cells = this._getCells(this._getBoundaries(this.props));
    return <div className="calendar-section__cells">{cells}</div>;
  }
}

export default CalendarSectionCells;
