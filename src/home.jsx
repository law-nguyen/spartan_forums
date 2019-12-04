import React, { Component } from "react";
import Routes from "./routes";
import { browserHistory } from "react-router";
import "./main.css";
import firebase from "firebase";
import {
  Navbar,
  Nav,
  Button,
  Image,
  Badge,
  Row,
  Col,
  Container,
  FormControl,
  Dropdown
} from "react-bootstrap";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
class HomePage extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }
  state = {};

  logout() {
    firebase.auth().logout();
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          {/* If Logo on top left is clicked, redirect to home page */}
          <Navbar.Brand href="/posts">
            <Image src="./img/icon.jpg" width="50" height="50" />
          </Navbar.Brand>
          <Navbar.Brand href="#home">Spartan Forums</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"></Nav.Link>

              <Nav.Link href="/add-post">
                <Image src="./img/new_post.png" width="30" height="30" />
              </Nav.Link>

              <Nav.Link href="#inbox">
                <Image src="./img/mail.jpg" width="30" height="32" />
                <Badge pill variant="danger" class="iconBadge">
                  2{/* put in lower right  and resize */}
                </Badge>
              </Nav.Link>
            </Nav>
            <Col md={{ span: 6 }}>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 mr-lg-1"
                />
                {/* <Button variant="outline-success">Search</Button> */}
                <button type="editButton">Search</button>
              </Form>
            </Col>

            {/* Adds the profile icon top right */}
            <div class="">
              <Dropdown alignRight>
                <Dropdown.Toggle variant="light">
                  <Image
                    src="./img/b man.png"
                    width="30"
                    height="30"
                    thumbnail
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="/settings">Settings </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="">
                    <p class="text-danger" onClick={this.logout}>
                      Sign Out
                    </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Navbar>
        {/* <div class="body"> */}
        {/* <Row> */}
        {/* <Col xl lg="2"> */}
        {/* This adds the post page into the right column */}
        <Routes history={browserHistory} />
        {/* </Col> */}
        {/* </Row> */}
        {/* </div> */}
      </div>
    );
  }
}

export default HomePage;
