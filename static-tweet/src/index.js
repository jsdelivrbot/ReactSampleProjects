import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

var Tweet = React.createClass({
  render: function() {
    return(
      <div className="tweet">
        <Avatar hash={this.props.tweet.gravatar}/>
        <div className="content">
          <NameWithHandle author={this.props.tweet.author}/>
          <Time time={this.props.tweet.timestamp}/>
          <Message text={this.props.tweet.message}/>
          <div className="buttons">
            <ReplyButton />
            <RetweetButton />
            <LikeButton />
            <MoreOptionsButton />
          </div>
        </div>
      </div>
    );
  }
});

var Avatar = React.createClass({
  render: function() {
    var hash = this.props.hash;
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return(
      <img src={url} className="avatar" alt=""/>
    );
  }
});

var Message = React.createClass({
  render: function() {
    return(
      <div className="message">
        {this.props.text}
      </div>
    );
  }
});

var NameWithHandle = React.createClass({
  render: function() {
    var {name , handle} = this.props.author
    return(
      <span className="name-with-handle">
        <span className="name">{name}</span>
        <span className="handle">@{handle}</span>
      </span>
    );
  }
});

var Time = React.createClass({
  computeTimeString: function() {
    return moment(this.props.time).fromNow();
  },
  render: function() {
    return (
      <span className="time">
        {this.computeTimeString()}
      </span>
    );
  }
});

var ReplyButton = React.createClass({
  render: function() {
    return (
      <i className="fa fa-reply reply-button" />
    );
  }
});

var RetweetButton = React.createClass({
  render: function(){
    return (
      <i className="fa fa-retweet retweet-button" />
    );
  }
});

var LikeButton = React.createClass({
  render: function(){
    return (
      <i className="fa fa-heart like-button" />
    );
  }
});

var MoreOptionsButton = React.createClass({
  render: function() {
    return (
      <i className="fa fa-ellipsis-h more-options-button" />
    );
  }
});

var testTweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-01 21:23:34"
};

ReactDOM.render(
  <Tweet tweet={testTweet}/>,
  document.getElementById('root')
);
