import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      episodeQueue: [],
      user: {
        username: '',
        id: ''
      }
    }
  }

  tempFunction() {
    console.log('Temp Function');
  }

  render() {
    return (
      <div>
        <div className='sidebar'>
          <h1>Podcast Deck</h1>
          {/* <SearchBar/> */}
        </div>

        {this.props.children && React.cloneElement(this.props.children, {
          appState: this.state,
          tempFunction: this.tempFunction.bind(this)
        })}

      </div>
    );
  }
}
