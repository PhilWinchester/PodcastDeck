import React, { Component } from 'react';
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
        <h1>Hi</h1>
      </div>
    );
  }
}
