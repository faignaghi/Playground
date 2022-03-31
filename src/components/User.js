import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  static defaultProps = {
    name: "Bilgi yok",
    salary: "Bilgi yok",
    department: " Bilgi yok",
  };

  render() {
    // Destructing
    const { name, salary, department } = this.props;
    return (
      <div>
        <ul>
          <li>
            Isim : {name} <i className="fa-regular fa-trash-can"></i>
          </li>
          <li>Maas : {salary}</li>
          <li>Departman : {department}</li>
        </ul>
      </div>
    );
  }
}

// User.defaultProps = {
//   name: "Bilgi yok",
//   salary: "Bilgi yok",
//   department: " Bilgi yok",
// };

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
};

export default User;
