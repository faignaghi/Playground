import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "John Smith",
        salary: "5000",
        department: "IT",
      },
      {
        id: 2,
        name: "Albert Dowson",
        salary: "7000",
        department: "IT-Problems",
      },
      {
        id: 3,
        name: "Faig Naghiyev",
        salary: "15000",
        department: "IT-Solutions",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
