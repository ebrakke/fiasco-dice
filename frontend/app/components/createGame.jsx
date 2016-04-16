import React from 'react';

export default class CreateGame extends React.Component {

  render() {
    return(
      <div className="create-game">
        <input type="text" name="username" id="username" placeholder="Username" />
        <div className="create-game-button">Create</div>
      </div>
    )
  }
}
