import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      test: ''
    }
  }


  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }

}
