import React, { Component } from "react";
import "./CalendarBody.css";

class CalendarBody extends Component {
  render() {
    return <div className="calendar-body">{this.props.children}</div>;
  }
}

export default CalendarBody;
