import React from 'react';
import Banner from './banner.jsx';

export default class MainLayout extends React.Component {
  
  render() {
    return (
      <div className='main'>
        <Banner />
        {this.props.children}
      </div>
    );
  }
}