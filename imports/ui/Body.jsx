import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';

export default class Body extends Component {
  render(){
    return (
      <div className="_body top-to-bottom bottom-to-top">

        <input type="text" className="forms-search" placeholder="Search..." />

      </div>
    )
  }
}
