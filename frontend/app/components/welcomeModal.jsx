import React from 'react';
import GetStarted from './getStarted.jsx';
import '../style/welcome.less';
export default class WelcomeModal extends React.Component {

  render() {

    return (
      <div className="welcome">
        <div className="disclaimer">
          <p>Unoffical Fiasco App</p>
        </div>
        <GetStarted />
      </div>
    )
  }
}
