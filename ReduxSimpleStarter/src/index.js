import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from "./components/search_bar";

const API_KEY = 'AIzaSyBHUNL2Rf3stgo0AJzu5hTMW0E1zXXh1jo';
// Create a new component
// This component should produce some html
const App = () => {
  return (<div>Hi!</div>);
}

// Take this component's generated HTML and
// put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
