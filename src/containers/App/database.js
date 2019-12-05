import React, { Component } from "react";
import firebase from "firebase";
import config from "./firebase-config";
import HomePage from "../../home";
import SignInPage from "../../SignIn";

class App extends Component {
  constructor() {
    super();

    // Initialize Firebase
    firebase.initializeApp(config);
  }

  state = {
    posts: [],
    user: {},
    loading: true
  };

  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user });
        localStorage.removeItem("user");
      }
    });
  }

  componentDidMount() {
    this.authListener();
  }

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
        {/* Checks to see if user is logged in. If they are, push them to homepage. If not, push them back to login screen */}
        {/* {this.state.user ? <HomePage /> : <SignInPage />} */}
      </div>
    );
  }
}

export default App;
