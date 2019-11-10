import React, { Component } from "react";

class AddPost extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    title: ""
  };

  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.firebase.ref("posts").push({
      title: this.state.title,
      upvote: 0,
      downvote: 0
    });

    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <div className="AddPost">
        <input
          type="text"
          placeholder="Write title of post"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
        {/*When user clicks on back to post button, redirect them to home site*/}
        <a href="/posts">Back to posts</a>
      </div>
    );
  }
}

export default AddPost;
