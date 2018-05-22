import React, { Component } from "react";
import CalendarCell from "./CalendarCell.js";
import "./CalendarSectionCells.css";
import moment from "moment";
import { filterHolidaysByDate } from "../helpers/utils";

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

  _isOutBoundaries(day, { calendarRange, month, year }) {
    let { start, end } = calendarRange;
    let out = false;

    if (year === start.year() && month === start.month()) {
      out = day < start.date();
    }

    if (!out && year === end.year() && month === end.month()) {
      out = day > end.date();
    }

    return out;
  }

  _findHolidayByDate(day, { month, year }, holidays) {
    return filterHolidaysByDate({ day, month, year }, holidays);
  }

  _getCells({ offset, totalCells }) {
    const { holidays } = this.props;
    let cells = [];
    // a day has maximum of 31 days, 4 weeks and 3 days remaing that can be distributed within a different week (~5 weeks)
    let maxCellsEntries = 7 * 5;
    let remainingCells = maxCellsEntries - totalCells - offset;
    let i;

    // full-fill with empty cells
    for (i = 0; i < offset; i++) {
      cells.push(<CalendarCell key={`offset-${i}`} />);
    }

    // render actual month cells that represent days
    for (let dayIndex = 0; dayIndex < totalCells; dayIndex++) {
      let data = this._getCellBasicData(dayIndex + 1, this.props);
      let props = {
        key: dayIndex,
        outOfbounderies: this._isOutBoundaries(dayIndex + 1, this.props),
        isHoliday: this._findHolidayByDate(dayIndex + 1, this.props, holidays),
        ...data
      };

      cells.push(<CalendarCell {...props} />);
    }

    // full-fill with empty cells
    for (i = 0; i < remainingCells; i++) {
      cells.push(<CalendarCell key={`after-${i}`} />);
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
