import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./utils/registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./home";
import Posts from "./containers/Posts/postPage";
import AddPost from "./containers/AddPost/addPost";
import SignIn from "./containers/SignIn/signIn";
import Post from "./containers/Posts/individualPost";
import ProfilePage from "./profile";
import LoginPage from "./loginPage";
import SampleLogin from "./sample";
import App from "./CreateAccount";
import WelcomePage from "./Welcome";
import SignInPage from "./SignIn";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));
//ReactDOM.render(<HomePage/>, document.getElementById('root'));
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route path="/posts" component={Posts} />
          <Route path="/add-post" component={AddPost} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/view/posts/:postId" component={Post} />
        </Switch>
      </Router>
    );
  }
}

<<<<<<< HEAD
ReactDOM.render(
  <div>
    {/* <HomePage /> */}
    {/* <LoginPage /> */}
    {/* <SampleLogin /> */}
    {/* <App /> */}
    <WelcomePage />
    {/* <SignInPage /> */}
  </div>,
  document.getElementById("root")
);
=======
ReactDOM.render(<App />, document.getElementById("root"));
>>>>>>> 238d0f4d0bf7b3e6792c7ccf45fcc3a335851a17

registerServiceWorker();
