import React, { Component } from "react";
import firebase from "firebase";
import config from "./firebase-config";

class App extends Component {
  constructor() {
    super();

    // Initialize Firebase
    firebase.initializeApp(config);
  }

  state = {
    posts: [],
    loading: true
  };

  componentWillMount() {
    let postsRef = firebase.database().ref("/posts");
    let commentsRef = firebase.database().ref("postswithcomments");

    let _this = this;

    postsRef.on("value", function(snapshot) {
      _this.setState({
        posts: snapshot.val(),
        loading: false
      });
    });

    commentsRef.on("value", function(snapshot) {
      _this.setState({
        postswithcomments: snapshot.val(),
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="App">
        {this.props.children &&
          React.cloneElement(this.props.children, {
            firebase: firebase.database(),
            posts: this.state.posts,
            postswithcomments: this.state.postswithcomments,
            loading: this.state.loading
          })}
      </div>
    );
  }
}

export default App;
