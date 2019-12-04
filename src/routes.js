import React from "react";
import { Router, Route } from "react-router";

import App from "./containers/App/database";
import Posts from "./containers/Posts/postPage";
import AddPost from "./containers/AddPost/addPost";
import SignIn from "./containers/SignIn/signIn";
import Post from "./containers/Posts/individualPost";
import ProfilePage from "./profile";
import CreateAccount from "./CreateAccount";
import SignInPage from "./SignIn";

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/posts" component={Posts} />
      <Route path="/add-post" component={AddPost} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/view/posts/:postId" component={Post} />
      <Route path="/create-account" component={CreateAccount} />
      <Route path="/login" component={SignInPage} />
    </Route>
  </Router>
);

export default Routes;
