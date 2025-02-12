import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "static/css/style.scss"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { animateScroll as scroll } from "react-scroll"
const hist = createBrowserHistory();
hist.listen(location => { // Route change listener
  scroll.scrollToTop()
})
ReactDOM.render(
  <Router history={hist}>
    <React.StrictMode>
      <App history={hist} />
    </React.StrictMode>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

if (process.env.NODE_ENV !== "development")
  serviceWorker.register();
else serviceWorker.unregister()
