import React, { Component } from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";

class AddPost extends Component {
  constructor() {
    super();

    this.handleTitle = this.handleTitle.bind(this);
    // this.handleBody = this.handleBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    title: "",
    body: ""
  };

  handleTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleBody = p => {
    this.setState({
      body: p.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.firebase.ref("posts").push({
      title: this.state.title,
      body: this.state.body,
      upvote: 0,
      downvote: 0
    });

    this.setState({
      title: "",
      body: ""
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col xs lg="2">
            <Container>
              <Button variant="light">Back</Button>
            </Container>
          </Col>
          <Col md="auto"></Col>
          <Col xl lg="2">
            <Form>
              <Form.Group controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="your epic title"
                  onChange={this.handleTitle}
                  value={this.state.title}
                />
              </Form.Group>
              <Form.Group controlId="Body">
                <Form.Label>The body of your post</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  onChange={this.handleBody}
                  value={this.state.body}
                />
              </Form.Group>
            </Form>
            <Button variant="primary" onClick={this.handleSubmit} href="/home">
              Submit
            </Button>
          </Col>
        </Row>
      </div>
      // <div className="AddPost">
      //   <input
      //     type="text"
      //     placeholder="Write title of post"
      //     onChange={this.handleChange}
      //     value={this.state.title}
      //   />

      //   <input
      //     type="ContentOfPost"
      //     placeholder="What do you want to say?"
      //     onChange={this.handleBody}
      //     value={this.state.body}
      //   />

      //   <button type="submit" onClick={this.handleSubmit}>
      //     Submit
      //   </button>
      //   {/*When user clicks on back to post button, redirect them to home site*/}
      //   <a href="/posts">Back to posts</a>
      // </div>
    );
  }
}

export default AddPost;
