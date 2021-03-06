import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./utils/registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./home";
import ProfilePage from "./profile";
import SignIn from "./containers/SignIn/signIn";
import Post from "./containers/Posts/individualPost";

//ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));
//ReactDOM.render(<HomePage/>, document.getElementById('root'));

ReactDOM.render(
  <div>
    {/* <HomePage/> */}
    <HomePage />
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
