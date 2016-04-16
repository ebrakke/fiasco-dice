import './style/main.less';
import WelcomeModal from './components/welcomeModal.jsx';
import Banner from './components/banner.jsx';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render (
  <Banner />,
  document.getElementById('nav')
);

ReactDOM.render(
  <WelcomeModal />,
  document.getElementById('app')
);
