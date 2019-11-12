import React, { Component } from "react";

class AddPost extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    title: "",
    body: ""
  };

  handleChange = e => {
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
      <div className="AddPost">
        <input
          type="text"
          placeholder="Write title of post"
          onChange={this.handleChange}
          value={this.state.title}
        />

        <input
          type="ContentOfPost"
          placeholder="What do you want to say?"
          onChange={this.handleBody}
          value={this.state.body}
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
