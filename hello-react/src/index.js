import React from 'react';
import ReactDOM from 'react-dom';

var HelloWorld = React.createClass({
  render: function(){
    var buttonLabel = "Submit";
    var isValid = false;
    return (
      <div>
        <Hello/><World/>! <br/>
        <button>{buttonLabel}</button>
        {/*The JS in brace must be an expression
          not a statement! */}
        <div>
          <span>{isValid ? 'Valid' : 'not Valid'}</span><br/>
          <span>
            {isValid && 'valid'}
            {!isValid && 'not valid'}
          </span>
        </div>
      </div>
    );
  }
});

var Hello = React.createClass({
  render: function(){
    return (
      // This is actually the JSX
      <span>Hello</span>
    );
  }
});

var World = React.createClass({
  render: function(){
    return (
      // This is actually the JSX
      <span>World</span>
    );
  }
});



ReactDOM.render(
  <HelloWorld/>,
  document.querySelector('#root')
);
// ReactDOM.render([React Element], [DOM Element]);
