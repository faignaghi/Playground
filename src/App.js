import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <User name="Faig Naghiyev" salary="25000" department="IT" />

        <User name="Naghi Faig" salary="15000" department="IT-City" />
      </div>
    );
  }
}

export default App;
