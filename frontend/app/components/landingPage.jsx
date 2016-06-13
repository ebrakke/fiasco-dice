import React from 'react';
import GetStarted from './getStarted.jsx';
import '../style/welcome.less';

const LandingPage = () => (
  <div className="welcome">
    <div className="disclaimer">
      <p>Unoffical Fiasco App</p>
    </div>
    <GetStarted />
  </div>
);

export default LandingPage;
