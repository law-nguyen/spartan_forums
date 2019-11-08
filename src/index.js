import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./utils/registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Post from "./containers/Posts/individualPost";

//ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));
//ReactDOM.render(<HomePage/>, document.getElementById('root'));

ReactDOM.render(
  <div>
    <Post />
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
