import React, { Component } from "react";
import "./CalendarSection.css";

class CalendarSection extends Component {
  render() {
    return <div className="calendar-section">{this.props.children}</div>;
  }
}

export default CalendarSection;
