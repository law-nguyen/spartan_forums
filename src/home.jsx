import React, { Component } from "react";
import Routes from "./routes";
import { browserHistory } from "react-router";
import "./main.css";
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
class HomePage extends Component {
  state = {};
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
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

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
                  <Dropdown.Item href="#/action-2">Settings </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="">
                    <p class="text-danger">Sign Out</p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Navbar>
        <div class="body">
          <Row>
            <Col xs lg="2">
              <Container class="sideBar">
                {/* make this inside a light blue box or smthn */}
                Directories you follow
                <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Link href="#CMPE">#CMPE</Nav.Link>
                  <Nav.Link href="#cooking">#cooking</Nav.Link>
                  <Nav.Link href="#music">#music</Nav.Link>
                </Nav>
              </Container>
            </Col>
            <Col md="auto"></Col>
            <Col xl lg="2">
              {/* This adds the post page into the right column */}
              <Routes history={browserHistory} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default HomePage;
