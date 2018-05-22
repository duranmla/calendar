import React, { Component } from "react";
import "./CalendarCell.css";
import classNames from "classnames";

class CalendarCell extends Component {
  render() {
    const { type, outOfbounderies } = this.props;
    let className = classNames("calendar-cell", type, {
      "out-boundaries": outOfbounderies
    });
    return <div className={className}>{this.props.number}</div>;
  }
}

export default CalendarCell;
