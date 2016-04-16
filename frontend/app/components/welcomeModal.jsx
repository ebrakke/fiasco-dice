import React from 'react';
import CreateGame from './createGame.jsx';
import JoinGame from './joinGame.jsx';
export default class WelcomeModal extends React.Component {

  render() {

    return (
      <div className="welcome">
        <div className="disclaimer">
          <p>Unoffical Fiasco App</p>
          <p>Pick a name to get started</p>
        </div>
        <CreateGame />
        <JoinGame />
      </div>
    )
  }
}
