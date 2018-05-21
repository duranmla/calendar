import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CalendarCell, CalendarBody, CalendarSection } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <CalendarBody>
            <CalendarSection>
              <CalendarCell />
            </CalendarSection>
          </CalendarBody>
        </p>
      </div>
    );
  }
}

export default App;
