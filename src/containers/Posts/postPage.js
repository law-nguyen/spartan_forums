import React, { Component } from "react";
import { Button } from "react-bootstrap";

import "./postsFormat.css";

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
        {/*When user clicks on add post Button, redirect them to add post subsite */}
        {/* <a href="/add-post">Add Post</a>  */}
        {Object.keys(posts).map(function(key) {
          return (
            <div key={key} class="post">
              <div>Title: {posts[key].title}</div>
              <div>Votes: {posts[key].upvote}</div>

              <div>
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
          );
        })}
      </div>
    );
  }
}

export default Posts;
