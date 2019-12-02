import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./utils/registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./home";
import SignIn from "./containers/SignIn/signIn";
import Post from "./containers/Posts/individualPost";
import ProfilePage from "./profile";
import LoginPage from "./loginPage";
import SampleLogin from "./sample";
import App from "./CreateAccount";
import WelcomePage from "./Welcome";
import SignInPage from "./SignIn";

//ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));
//ReactDOM.render(<HomePage/>, document.getElementById('root'));

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

registerServiceWorker();
