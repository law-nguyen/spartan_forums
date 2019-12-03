import React from "react";
import { Router, Route } from "react-router";

import App from "./containers/App/database";
import Posts from "./containers/Posts/postPage";
import AddPost from "./containers/AddPost/addPost";
import SignIn from "./containers/SignIn/signIn";
import Post from "./containers/Posts/individualPost";
import ProfilePage from "./profile";

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/add-post" component={AddPost} />
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/view/posts/:postId" component={Post} />
    </Route>
  </Router>
);

export default Routes;
