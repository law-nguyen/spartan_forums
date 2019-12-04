import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./postsFormat.css";
import Post from "./individualPost";

class Posts extends Component {
  handleUpvote = (post, key) => {
    this.props.firebase.ref("posts/" + key).set({
      title: post.title,
      upvote: post.upvote + 1,
      downvote: post.downvote
    });
  };

  handleDownvote = (post, key) => {
    this.props.firebase.ref("posts/" + key).set({
      title: post.title,
      upvote: post.upvote - 1,
      downvote: post.downvote
    });
  };

  handleDeletePost = (post, key) => {
    this.props.firebase.ref("posts/" + key).remove();
  };

  // handleTransferToPost = (post, key) => {
  //   this.props.firebase.ref("posts/" + key).set;
  // };

  render() {
    let posts = this.props.posts;
    let _this = this;

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
            // <div key={key} class="post">
            <div key={key} className="postPage-wrapper">
              <div class="postPage-form-wrapper">
                <h2>
                  <BrowserRouter>
                    {/* When clicked on a post, link them to that specific post */}
                    <Link to={`/view/posts/${key}`}>
                      Title: {posts[key].title}
                    </Link>
                  </BrowserRouter>
                </h2>

                <div className="margin">Votes: {posts[key].upvote}</div>
                {/* <div>Body: {posts[key].body}</div> */}

                <div className="margin">
                  <Button
                    className="m-2"
                    variant="light"
                    onClick={_this.handleUpvote.bind(this, posts[key], key)}
                  >
                    Upvote
                  </Button>
                  <Button
                    className="m-2"
                    variant="light"
                    onClick={_this.handleDownvote.bind(this, posts[key], key)}
                  >
                    Downvote
                  </Button>
                  <Button
                    className="m-2"
                    variant="outline-danger"
                    onClick={_this.handleDeletePost.bind(this, posts[key], key)}
                  >
                    Delete Post
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;
