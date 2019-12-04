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
                  <button className="mr-5">Like</button>
                  <button className="mr-5">Save</button>
                  <button className="mr-5">Share</button>
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
                    <button type="submit">Post Comment</button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>

      // <div>
      //   <div class="post">
      //     <div class="body">
      //       <Row>
      //         <Col xs lg="2">
      //           <Container>
      //             <Button variant="light" href="/posts">
      //               Back
      //             </Button>
      //           </Container>
      //         </Col>
      //         <Col md="auto"></Col>
      //         <Col xl lg="2">
      //           <div class="post">
      //             <Container>
      //               <Row>
      //                 <Col>
      //                   <h1>{posts[this.props.params.postId].title}</h1>
      //                   <Row>
      //                     <Col>Posted by:</Col>
      //                   </Row>
      //                   <Row>
      //                     <Col>Date Posted:</Col>
      //                   </Row>
      //                 </Col>
      //                 <Col></Col>
      //                 <Col> Category: School</Col>
      //               </Row>
      //               <div class="postBody">
      //                 {posts[this.props.params.postId].body}
      //               </div>
      //               <div class="postFooter">
      //                 <button className="mr-3">Like</button>
      //                 <button className="mr-3">Save</button>
      //                 <button className="mr-3">Share</button>
      //               </div>
      //               <div class="postFooter">
      //                 <Form.Group controlId="exampleForm.ControlTextarea1">
      //                   <Form.Control
      //                     as="textarea"
      //                     rows="3"
      //                     type="text"
      //                     placeholder="Leave A Comment"
      //                    />
      //                   <button type="submit">Submit</button>
      //                 </Form.Group>
      //               </div>
      //             </Container>
      //           </div>
      //         </Col>
      //       </Row>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Post;

/* <Form.Label>Leave A Comment</Form.Label> 

                                  This is the submit button. When you press it, it pushes to database (FIX LATER)
                                     onChange={this.handleChange}
                                     value={this.state.comment}
                              */

{
  /*     
                                     Put onClick={this.handleSubmit} after the "submit" later
                                */
}
