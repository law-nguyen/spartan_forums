import React, { Component } from "react";
import "./App.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Image,
  Badge,
  Row,
  Col,
  Container,
  Dropdown
} from "react-bootstrap";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   userName: null,
      //   interests: null,
      //   major: null,
      //   graduatingYear: null,
      //   formErrors: {
      //     userName: "",
      //     interests: "",
      //     major: "",
      //     graduatingYear: ""
      //   }
      userName: null,
      interests: null,
      major: null,
      graduatingYear: null,
      studentID: null,
      formErrors: {
        userName: "",
        interests: "",
        major: "",
        graduatingYear: "",
        studentID: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Username: ${this.state.userName}
        Interests: ${this.state.interests}
        Major: ${this.state.major}
        Graduating Year: ${this.state.graduatingYear}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      //   case "userName":
      //     formErrors.userName =
      //       value.length < 3 ? "minimum 3 characters required" : "";
      //     break;
      //   case "interests":
      //     formErrors.interests =
      //       value.length < 3 ? "minimum 3 characters required" : "";
      //     break;
      //   case "major":
      //     formErrors.major =
      //       value.length < 3 ? "minimum 3 characters required" : "";
      //     break;
      case "graduatingYear":
        formErrors.graduatingYear =
          value.length < 4 ? "4 numbers required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="welcome-form-wrapper">
          <h3>Welcome to Spartan Forums!</h3>
          <div className="welcome-text-margin">
            <small class="text-muted">
              To better your experience here, share some more information about
              yourself!
            </small>
          </div>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="userName">
              <label htmlFor="userName">Desired Username</label>
              <input
                className={formErrors.userName.length > 0 ? "error" : null}
                placeholder="Username"
                type="text"
                name="userName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.userName.length >
                0 /*&& (
                <span className="errorMessage">{formErrors.userName}</span>
              )*/}
            </div>
            <div className="interests">
              <label htmlFor="interests">
                Interests (i.e. Cooking, Games, Reading)
              </label>
              <input
                // className={formErrors.interests.length > 0 ? "error" : null}
                placeholder="Interests"
                type="text"
                name="interests"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.interests.length >
                0 /*&& (
                <span className="errorMessage">{formErrors.interests}</span>
              )*/}
            </div>
            <div className="major">
              <label htmlFor="major">Major</label>
              <input
                className={formErrors.major.length > 0 ? "error" : null}
                placeholder="Major"
                type="major"
                name="major"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.major.length >
                0 /*&& (
                <span className="errorMessage">{formErrors.major}</span>
              )*/}
            </div>
            <div className="graduatingYear">
              <label htmlFor="graduatingYear">Graduating Year</label>
              <input
                className={
                  formErrors.graduatingYear.length > 0 ? "error" : null
                }
                placeholder="Graduating Year"
                type="graduatingYear"
                name="graduatingYear"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.graduatingYear.length > 0 && (
                <span className="errorMessage">
                  {formErrors.graduatingYear}
                </span>
              )}
            </div>
            <div className="welcomeSubmit">
              <button type="submit">
                <Nav.Link href="/link-here">
                  <custom>Submit</custom>
                </Nav.Link>
              </button>
              <Nav.Link href="/profile">
                <small>
                  <u>No thanks.</u>
                </small>
              </Nav.Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
