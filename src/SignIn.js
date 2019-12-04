import React, { Component } from "react";
import "./App.css";
import App from "./containers/SignIn/signIn";
import config from "./containers/App/firebase-config";
import HomePage from "./home";
import firebase from "firebase";

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

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      //   email: null,
      //   password: null,
      //   major: null,
      //   graduatingYear: null,
      //   formErrors: {
      //     email: "",
      //     password: "",
      //     major: "",
      //     graduatingYear: ""
      //   }
      email: null,
      password: null,
      major: null,
      graduatingYear: null,
      studentID: null,
      formErrors: {
        email: "",
        password: "",
        major: "",
        graduatingYear: "",
        studentID: "",

        user: {}
      }
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user });
        localStorage.removeItem("user");
      }
    });
  }

  login(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Email: ${this.state.email}
        Password: ${this.state.password}
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
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.interests =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      //   case "major":
      //     formErrors.major =
      //       value.length < 3 ? "minimum 3 characters required" : "";
      //     break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <div className="signin-text-margin">
            <h3>Sign In</h3>
          </div>

          {/*
          <div className="App">
            Checks to see if user is logged in. If they are, push them to homepage. If not, push them back to login screen *
            {this.state.user ? <HomePage /> : <SignInPage />}
          </div>
          */}

          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                value={this.state.email}
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                // className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                value={this.state.password}
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="signIn">
              <button type="submit">
                <Nav.Link href="/posts">
                  <custom>Log In</custom>
                </Nav.Link>
              </button>
              <Nav.Link href="/retrieval">
                <small>
                  <u>Forgot your username/password?</u>
                </small>
              </Nav.Link>
            </div>
            <div className="withGoogle">
              <App />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignInPage;
