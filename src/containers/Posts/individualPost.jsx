import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./postsFormat.css";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
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
  }

  state = {
    //title, body, author, date posted, category, likes, comments
    comment: ""
  };

  render() {
    let posts = this.props.posts;

    if (!posts) {
      return false;
    }

    if (this.props.loading) {
      return <div>Loading</div>;
    }

    return (
      <div>
        {Object.keys(posts).map(function(key) {
          return (
            <div key={key} class="post">
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
                            <h1>
                              {/*   
                                  This is where the title data does to the post 
                              */}
                              {posts[key].title}
                            </h1>
                            <Row>
                              <Col>Posted by:</Col>
                            </Row>
                            <Row>
                              <Col>Date Posted:</Col>
                            </Row>
                          </Col>
                          <Col></Col>
                          <Col> Category: School</Col>
                        </Row>
                        <div class="postBody">
                          {/*      
                              This is where the body data goes to the post page
                          */}
                          {posts[key].body}
                        </div>
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
                              /* <Form.Label>Leave A Comment</Form.Label> 

                                  This is the submit button. When you press it, it pushes to database (FIX LATER)
                                     onChange={this.handleChange}
                                     value={this.state.comment}
                              */
                            />

                            {/*     
                                Put onClick={this.handleSubmit} after the "submit" later
                           */}
                            <button type="submit">Submit</button>
                          </Form.Group>
                        </div>
                      </Container>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Post;
