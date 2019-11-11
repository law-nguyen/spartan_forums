import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./home";


//ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));
//ReactDOM.render(<HomePage/>, document.getElementById('root'));

ReactDOM.render( 
<div>
    <HomePage/>
</div>,
document.getElementById('root'));

registerServiceWorker();

