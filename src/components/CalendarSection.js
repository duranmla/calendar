import React, { Component } from "react";
import "./CalendarSection.css";
import {
  CalendarSectionHeader,
  CalendarSectionColumnGuidelines,
  CalendarSectionCells
} from "./";
import { getHolidaysByDate } from "../api/holidays";

/**
 * container for an entire unit within the calendar, whenever the Calendar
 * displays months a unit will be equivalent to one month.
 * @extends Component
 */
class CalendarSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holidays: []
    };
  }

  async _getSectionHolidays({ month, year }, countryCode) {
    // moment handle monthIndex starting from 0, so we need to overcome that by adding one
    let monthIndex = month + 1;
    return await getHolidaysByDate({ month: monthIndex, year }, countryCode);
  }

  _updateSectionHolidays(props) {
    const { countryCode } = props;
    this._getSectionHolidays(props, countryCode).then(r =>
      this.setState({ holidays: r.data ? r.data.holidays : [] })
    );
  }

  componentWillMount() {
    this._updateSectionHolidays(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this._updateSectionHolidays(nextProps);
  }

  render() {
    const { showGuidelines, month, year, calendarRange } = this.props;
    let passProps = { month, year };

    return (
      <div className="calendar-section monthly">
        {showGuidelines ? <CalendarSectionColumnGuidelines /> : ""}
        <CalendarSectionHeader {...passProps} />
        <CalendarSectionCells
          {...passProps}
          calendarRange={calendarRange}
          holidays={this.state.holidays}
        />
      </div>
    );
  }
}

export default CalendarSection;
