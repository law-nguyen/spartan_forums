import React, { Component } from "react";
import { Button } from "react-bootstrap";

import "./postsFormat.css";

import { Form, Row, Col, Container } from "react-bootstrap";
import "./postsFormat.css";

class Post extends Component {
  constructor(props) {
    super(props);
  }

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
        <div class="indi-wrapper">
          <div class="indi-form-wrapper">
            <div className="margin-left">
              <h1>{posts[this.props.params.postId].title}</h1>
            </div>
            <div className="margin-left">Category: School</div>
            <div className="margin-left">Posted by: Swaggy Park</div>
            <div className="margin-left">Date Posted: 04/20/2420</div>

            <Container>
              <div class="postBody">{posts[this.props.params.postId].body}</div>
              <div class="postFooter">
                <div class="marginButtonIndiPost">
                  <button className="mr-5">
                    <custom>Like</custom>
                  </button>
                  <button className="mr-5">
                    <custom>Save</custom>
                  </button>
                  <button className="mr-5">
                    <custom>Share</custom>
                  </button>
                </div>
              </div>
              <div class="postFooter">
                <div className="postContent">
                  <Form.Group controlId="Body">
                    <Form.Control
                      as="textarea"
                      rows="7"
                      type="text"
                      placeholder="Leave A Comment"
                    />
                  </Form.Group>
                  <div className="post-comment">
                    <button type="submit">
                      <custom>Post Comment</custom>
                    </button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
