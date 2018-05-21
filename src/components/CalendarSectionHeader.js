import React, { Component } from "react";
import "./CalendarSectionHeader.css";
import moment from "moment";

/**
 * Each of the section as a header label, for a calendar displaying months this
 * will represent the month name (January, February...)
 * @extends Component
 */
class CalendarSectionHeader extends Component {
  _getLabel() {
    const { month, year } = this.props;
    let monthFormatted = moment()
      .month(month)
      .format("MMMM");

    return `${monthFormatted} ${year}`;
  }

  render() {
    return (
      <div className="calendar-section__header">
        <strong>{this._getLabel()}</strong>
      </div>
    );
  }
}

export default CalendarSectionHeader;
