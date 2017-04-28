import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

// App component - represents the whole app
class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container">

        <Header />
        <Body />
        <Footer />

      </div>
    );
  }
}

export default createContainer(() => {
  return {};
}, App);
