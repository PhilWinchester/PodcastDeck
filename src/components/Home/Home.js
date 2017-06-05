import React, { Component } from 'react';
import Column               from '../Column/Column';
import './Home.css';

export default class Home extends Component {
  constructor() {
      super()

      this.state = {
        columns: []
      }
  }


  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {this.props.columns}
      </div>
    );
  }
}
