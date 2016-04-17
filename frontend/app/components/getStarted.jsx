import React from 'react';
import '../style/getStarted.less';

export default class GetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      join: false,
      hasUsername: false
    }
  }

  handleCodeInput(e) {
    if (e.target.value !== '') {
      this.setState( {join: true} );
      return;
    }
    this.setState( { join: false} );
  }

  handleUsernameInput(e) {
    if (e.target.value !== '') {
      this.setState( {hasUsername: true} );
      return;
    }
    this.setState( {hasUsername: false});
  }

  onButtonClick(e) {
    if (! this.state.hasUsername) return;
    if (this.state.join) {
      console.log('Joining Game...');
      return;
    }
    console.log('Creating Game...');
  }

  render() {
    return(
      <div className="get-started">
        <p>Enter a nickname to get started</p>
        <input name="nickname" placeholder="Nickname" onKeyUp= { this.handleUsernameInput.bind(this) }/>
        <input name="code" placeholder="Code" onKeyUp={ this.handleCodeInput.bind(this) }/>
        <div className={ this.state.hasUsername ? 'button' : 'button disabled' } onClick={ this.onButtonClick.bind(this) }>{ this.state.join ? 'Join' : 'Create' }</div>
      </div>
    )
  }
}
