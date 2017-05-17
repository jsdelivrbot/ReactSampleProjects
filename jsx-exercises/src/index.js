import React from 'react';
import ReactDOM from 'react-dom';
/*
var MyThing = React.createClass({
  render: function(){
    return (
      React.createElement('div', {className: 'book'},
        React.createElement('div', {className: 'title'}, "The Title"),
        React.createElement('div', {className: 'author'}, "The Author"),
        React.createElement('ul', {className: 'stats'},
          React.createElement('li', {className: 'rating'}, "5 stars"),
          React.createElement('li', {className: 'isbn'}, "12-345678-910")
        )
      )
    );
  }
});
*/

class MyThing extends React.Component{
  render(){
    return (
      <div className='book'>
        <div className='title'>The Title</div>
        <div className='author'>
          The Author
        </div>
        <ul className='stats'>
          <li className='rating'>
            5 stars
          </li>
          <li className='isbn'>
            12-345678-910
          </li>
        </ul>
      </div>
    );
  }
};

class Greeting extends React.Component{
  render(){
    var username = "root";
    //var username = undefined;
    //var username = null;
    //var username = false;
    //var username = 108;

    return(
      <div>{username ? ("Hello "+username+".") : "Not logged in." }</div>
    );
  }
};

class Parent extends React.Component {
  handleAction(action) {
    console.log('Child says', action);
  };
  render(){
    return(
      <Child onAction={this.handleAction} />
    );
  }
};

class Child extends React.Component{
  alertParent() {
    //console.log(this);
    this.props.onAction('button was clicked');
  };
  render(){
    return (
      <button onClick={this.alertParent.bind(this)} />
    );
  }
};


class Summ extends React.Component{
  render() {
    return (
        <div className="summ">
          <MyThing />
          <Greeting />
          <Parent />
        </div>
    );
  }
};


ReactDOM.render(
  <Summ />,
  document.getElementById('root')
);
