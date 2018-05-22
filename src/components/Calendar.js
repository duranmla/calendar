import React, { Component } from "react";
import "./Calendar.css";
import { CalendarBody, CalendarSection, CalendarControls } from "./";
import moment from "moment";

/**
 * common parent that will serve as a unified place to distribute options to render the
 * calendar as it is expected by the user
 * @extends Component
 */
class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { startDate: "", endDate: "", countryCode: "" };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  _alertInvalidRange() {
    alert("The given range is invalid");
    return [];
  }

  _getSections({ startDate, endDate }, countryCode) {
    let sections = [];
    let monthsToRender = endDate.diff(startDate, "months");

    if (monthsToRender < 0) return this._alertInvalidRange();

    let iterableDate = moment([
      startDate.year(),
      startDate.month(),
      startDate.date()
    ]);

    for (let i = 0; i <= monthsToRender; i++) {
      let props = {
        key: i,
        showGuidelines: i === 0,
        calendarRange: {
          start: startDate,
          end: endDate
        },
        countryCode,
        month: iterableDate.month(),
        year: iterableDate.year()
      };

      sections.push(<CalendarSection {...props} />);

      // iterate over the months
      iterableDate.add(1, "months");
    }

    return sections;
  }

  handleOnChange(event) {
    let value = event.target.value;
    this.setState({ [event.target.name]: value });
  }

  render() {
    const { startDate, endDate, countryCode } = this.state;
    let sections = null;

    if (startDate && endDate && countryCode) {
      sections = this._getSections(
        { startDate: moment(startDate), endDate: moment(endDate) },
        countryCode
      );
    }

    return (
      <div className="calendar">
        <CalendarControls
          _handleOnChange={this.handleOnChange}
          startDate={startDate}
          endDate={endDate}
          countryCode={countryCode}
        />
        <CalendarBody>{sections}</CalendarBody>
      </div>
    );
  }
}

export default Calendar;
