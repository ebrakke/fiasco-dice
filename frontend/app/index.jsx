import WelcomeModal from './components/welcomeModal.jsx';
import CreateGame from './components/createGame.jsx';
import Banner from './components/banner.jsx';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import React from 'react';
import './style/main.less';

ReactDOM.render (
  <Banner />,
  document.getElementById('banner')
);

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path='/' component={WelcomeModal} />
    <Route path='*' component={WelcomeModal}></Route>
  </Router>
), document.getElementById('app'));
