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
import "./postsFormat.css";

class Post extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    //title, body, author, date posted, category, likes, comments
    comment: ""
  };

  handleChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.firebase.ref("postswithcomments").push({
      comment: this.state.comment
    });

    this.setState({
      comment: ""
    });
  };

  render() {
    let postswithcomments = this.props.comment;
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
              <div class="post">
                <Container>
                  <Row>
                    <Col>
                      <h1>title</h1>
                      <Row>
                        <Col>Posted by:</Col>
                      </Row>
                      <Row>
                        <Col>Date Posted:</Col>
                      </Row>
                    </Col>
                    <Col></Col>T<Col> Category: School</Col>
                  </Row>
                  <div class="postBody">Content of posts goes here</div>
                  <div class="postFooter">
                    <button className="mr-3">Like</button>
                    <button className="mr-3">Save</button>
                    <button className="mr-3">Share</button>
                  </div>
                  <div class="postFooter">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      {/* <Form.Label>Leave A Comment</Form.Label> */}
                      <Form.Control
                        as="textarea"
                        rows="3"
                        type="text"
                        placeholder="Leave A Comment"
                        onChange={this.handleChange}
                        value={this.state.comment}
                      />
                      <button type="submit" onClick={this.handleSubmit}>
                        Submit
                      </button>
                    </Form.Group>
                  </div>
                </Container>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Post;
