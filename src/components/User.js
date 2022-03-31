import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  state = {
    isVisible: false,
  };

  static defaultProps = {
    name: "Bilgi yok",
    salary: "Bilgi yok",
    department: " Bilgi yok",
  };

  constructor(props) {
    super(props);
    this.onClickEvent = this.onClickEvent.bind(this);
  }

  onClickEvent = (number, e) => {
    console.log(number);
  };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isVisible: false,
  //   };
  // }

  render() {
    // Destructing
    const { name, salary, department } = this.props;
    const { isVisible } = this.state;

    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline" onClick={this.onClickEvent.bind(this, 34)}>
              {name}
            </h4>
            <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
          </div>
          {isVisible ? (
            <div className="card-body">
              <p className="card-text">Maas : {salary}</p>
              <p className="card-text">Department : {department}</p>
            </div>
          ) : null}
        </div>
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
