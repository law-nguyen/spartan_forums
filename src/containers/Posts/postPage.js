import React, { Component } from 'react';

class Posts extends Component {
  handleUpvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote + 1,
      downvote: post.downvote
    });
  }

  handleDownvote = (post, key) => {
    this.props.firebase.ref('posts/' + key).set({
      title: post.title,
      upvote: post.upvote - 1,
      downvote: post.downvote
    });
  }

  handleDeletePost = (post, key) => {
      this.props.firebase.ref('posts/' + key).remove ()
  }

  render() {
    let posts = this.props.posts;
    let _this = this;

    if (!posts) {
      return false;
    }

    if (this.props.loading) {
      return (
        <div>
          Loading
        </div>
      );
    }

    return (
      <div className="Posts">
      {/*When user clicks on add post button, redirect them to add post subsite*/}
        <a href="/add-post">Add Post</a>
        { Object.keys(posts).map(function(key) {
            return (
              <div key={key}>
                <div>Title: { posts[key].title }</div>
                <div>Votes: { posts[key].upvote }</div>
                <div>
                  <button onClick={ _this.handleUpvote.bind(this, posts[key], key)} type="button">Upvote</button>
                  <button onClick={ _this.handleDownvote.bind(this, posts[key], key)} type="button">Downvote</button> 
                  <button onClick={ _this.handleDeletePost.bind(this, posts[key], key)} type="button">Delete Post</button> 
                </div>
              </div>
            );
        })}
      </div>
    );
  }
}

export default Posts;
