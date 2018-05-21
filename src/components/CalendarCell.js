import React, { Component } from "react";
import "./CalendarCell.css";
import classNames from "classnames";

class CalendarCell extends Component {
  render() {
    let className = classNames("calendar-cell", this.props.type);
    return <div className={className}>{this.props.number}</div>;
  }
}

export default CalendarCell;
