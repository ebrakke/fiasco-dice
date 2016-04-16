import React from 'react';
import '../style/joinGame.less';

export default class JoinGame extends React.Component {
  render() {
    return(
      <div className="join-game">
        <div className="enter-code">
          <p>Or you can join a game</p>
        </div>
        <input name="username" placeholder="username" />
        <input name="code" placeholder="code" />
        <div className="join-button">Join</div>
      </div>
    )
  }
}
