import React, { Component } from "react";
import { Col, Row, Form, Button, Container, Nav } from "react-bootstrap";
import "./addPost.css";

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
      <div className="wrapper">
        <div className="form-wrapper">
          <h3>Create your Post!</h3>
          <div className="margin"> </div>
          <div className="title">
            <label htmlFor="title">Title</label>
            <input
              type="name"
              placeholder="your epic title"
              onChange={this.handleTitle}
              value={this.state.title}
            ></input>
          </div>
          <div className="postContent">
            <Form.Group controlId="Body">
              <label htmlFor="postContent">The body of your post</label>
              <Form.Control
                as="textarea"
                rows="5"
                onChange={this.handleBody}
                value={this.state.body}
              />
            </Form.Group>
          </div>
          <Form>
            {/* <Form.Group controlId="Title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="name"
                placeholder="your epic title"
                onChange={this.handleTitle}
                value={this.state.title}
              />
            </Form.Group> */}
            {/* <Form.Group controlId="Body">
              <Form.Label>The body of your post</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                onChange={this.handleBody}
                value={this.state.body}
              />
            </Form.Group> */}
          </Form>

          {/*When user clicks on back to post button, redirect them to home site*/}
          <div className="addPostSubmit">
            {/* <a href="/posts" onClick={this.handleSubmit}> */}
            <button type="submit">
              {/* <Nav.Link href="/posts"> */}
              <custom>Submit</custom>
              {/* </Nav.Link> */}
            </button>
            {/* </a> */}

            <Nav.Link href="/posts">
              <small>
                <u>Back to posts</u>
              </small>
            </Nav.Link>
            {/* <a href="/posts">Back to posts</a> */}
          </div>
        </div>
      </div>
      // <div>
      //   <Row>
      //     <Col xs lg="2">
      //       <Container>
      //         <Button variant="light">Back</Button>
      //       </Container>
      //     </Col>
      //     <Col md="auto"></Col>
      //     <Col xl lg="2">
      //       <Form>
      //         <Form.Group controlId="Title">
      //           <Form.Label>Title</Form.Label>
      //           <Form.Control
      //             type="name"
      //             placeholder="your epic title"
      //             onChange={this.handleTitle}
      //             value={this.state.title}
      //           />
      //         </Form.Group>
      //         <Form.Group controlId="Body">
      //           <Form.Label>The body of your post</Form.Label>
      //           <Form.Control
      //             as="textarea"
      //             rows="5"
      //             onChange={this.handleBody}
      //             value={this.state.body}
      //           />
      //         </Form.Group>
      //       </Form>
      //       <Button variant="primary" onClick={this.handleSubmit} href="/home">
      //         Submit
      //       </Button>
      //     </Col>
      //   </Row>
      // </div>
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
