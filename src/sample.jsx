import React, { Component } from "react";
import Routes from "./routes";
import { browserHistory } from "react-router";
import "./main.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  FormGroup,
  Button,
  Image,
  Badge,
  Row,
  Col,
  Dropdown,
  Container
} from "react-bootstrap";

class SampleLogin extends Component {
  state = {};
  render() {
    return (
      <Form className="login-form">
        <h1>
          <span className="font-weight-bold">BobbyBoob</span>.com
        </h1>
      </Form>
    );
  }
}

export default SampleLogin;
