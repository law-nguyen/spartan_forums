import React, { Component } from "react";
import App from './containers/App/database';
import Posts from './containers/Posts/postPage';
import AddPost from './containers/AddPost/addPost';
import { Link } from 'react-router';

import Routes from './routes';

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
  Col
} from "react-bootstrap";
class HomePage extends Component {
  state = {};
  render() {



    return (
      <div>
        <Navbar bg="light" expand="lg">
          {/* If Logo on top left is clicked, redirect to home page */}
          <Navbar.Brand href="/">
            <Image src="./img/icon.jpg" width="50" height="50" />
          </Navbar.Brand>
          <Navbar.Brand href="#home">Spartan Forums</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">
              </Nav.Link>



              <Nav.Link href="/add-post">
                <Image src="./img/new_post.png" width="30" height="30" />
              </Nav.Link>


              <Nav.Link href="#inbox">
                <Image src="./img/mail.jpg" width="30" height="32" />
                <Badge pill variant="danger" class="icon-badge">
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
          </Navbar.Collapse>
        </Navbar>
        <div class="body">
          <Row>
            <Col xs lg="2" class="side-bar">
              {/* make this inside a light blue box or smthn */}
              Directories you follow
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="#CMPE">#CMPE</Nav.Link>
                <Nav.Link href="#cooking">#cooking</Nav.Link>
                <Nav.Link href="#music">#music</Nav.Link>
              </Nav>
            </Col>
            <Col md="auto">indent</Col>
            <Col xl lg="2">
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default HomePage;
