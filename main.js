import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './Components/MainPage.jsx';
import Weather from './Components/Weather.jsx';
import About from './Components/About.jsx';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={MainPage}>
    <Route path='About' component={About}/>
      <IndexRoute component={Weather} />
    </Route>
  </Router>
, document.getElementById('app'));
