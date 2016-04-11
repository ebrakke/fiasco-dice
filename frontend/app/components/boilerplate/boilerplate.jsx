import React from 'react';

export default class Boilerplate extends React.Component {
  render() {
    const items = [
      {
        id: 'some id',
        value: 'Here is a value of mine'
      },
      {
        id: 'some id again',
        value: 'Here is another value of mine'
      },
      {
        id: 'some id 3',
        value: 'Here is a third value of mine'
      }
    ];

    return (
      <div className="boilerplate">
        <ul>
          {items.map(item => <li key={item.id}>{item.value}</li>)}
        </ul>
      </div>
    );
  }
}
