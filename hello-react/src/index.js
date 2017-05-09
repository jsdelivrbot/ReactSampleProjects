import React from 'react';
import ReactDOM from 'react-dom';

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>Hello World!</div>
    );
  }
});

ReactDOM.render(
  <HelloWorld/>,
  document.querySelector('#root')
);
