import React, { Component } from "react";
import "./CalendarCell.css";
import classNames from "classnames";
import _ from "lodash";

class CalendarCell extends Component {
  render() {
    const { type, outOfbounderies, isHoliday } = this.props;

    let className = classNames("calendar-cell", type, {
      "out-boundaries": outOfbounderies,
      "is-holiday": !_.isEmpty(isHoliday)
    });

    return <div className={className}>{this.props.number}</div>;
  }
}

export default CalendarCell;
