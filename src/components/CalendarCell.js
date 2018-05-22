import React, { Component } from "react";
import "./CalendarCell.css";
import classNames from "classnames";
import _ from "lodash";

class CalendarCell extends Component {
  render() {
    const { type, outOfbounderies, holidays } = this.props;

    let className = classNames("calendar-cell", type, {
      "out-boundaries": outOfbounderies,
      "is-holiday": !_.isEmpty(holidays)
    });

    return <div className={className}>{this.props.number}</div>;
  }
}

export default CalendarCell;
