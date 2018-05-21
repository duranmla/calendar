import React, { Component } from "react";
import "./CalendarBody.css";

/**
 * Serve as a proxy of information in order to delivery only what is needed to
 * each of its children.
 * @extends Component
 */
class CalendarBody extends Component {
  render() {
    return <div className="calendar-body">{this.props.children}</div>;
  }
}

export default CalendarBody;
