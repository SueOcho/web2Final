import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import MainNav from './Common/MainNav';
import MainFooter from './Common/MainFooter';

import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';




import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <MainNav/>
        <main id="main-content">
        <Route exact path="/" component={App} />
     </main>
      <MainFooter/>
    </Router>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
