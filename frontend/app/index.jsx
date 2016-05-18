import MainLayout from './components/mainLayout.jsx';
import LandingPage from './components/landingPage.jsx';
import CreateGame from './components/createGame.jsx';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import React from 'react';
import './style/main.less';

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route component={ MainLayout }>
      <Route path='/' component={ LandingPage } />
      <Route path='/create' component={ CreateGame } />
    </Route>
  </Router>
), document.getElementById('app'));
