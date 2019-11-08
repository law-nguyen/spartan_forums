import React, { Component } from "react";
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
  Container
} from "react-bootstrap";

class Post extends Component {
  state = {
    //title, body, author, date posted, category, likes, comments
  };
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
          </Navbar.Collapse>
        </Navbar>

        <div class="body">
          <Row>
            <Col xs lg="2">
              <Container>
                <Button variant="light">Back</Button>
              </Container>
            </Col>
            <Col md="auto"></Col>
            <Col xl lg="2">
              <Container class="post">
                <Row></Row>
              </Container>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Post;
