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
import CreateAccount from "./CreateAccount";
import WelcomePage from "./Welcome";
import SignInPage from "./SignIn";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));
//ReactDOM.render(<HomePage/>, document.getElementById('root'));
// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route exact path="/home" component={HomePage} />
//           <Route exact path="/posts" component={Posts} />
//           <Route exact path="/add-post" component={AddPost} />
//           <Route exact path="/signIn" component={SignIn} />
//           <Route exact path="/profile" component={ProfilePage} />
//           <Route exact path="/view/posts/:postId" component={Post} />
//         </Switch>
//       </Router>
//     );
//   }
// }

ReactDOM.render(<HomePage />, document.getElementById("root"));
