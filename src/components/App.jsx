import React, { Component }      from 'react';
import Sidebar                   from './Sidebar/Sidebar';
import MainRouter                from './MainRouter/MainRouter';
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
          <Sidebar />
          <MainRouter />

          {/* {this.props.children && React.cloneElement(this.props.children, {
            appState: this.state,
            tempFunction: this.tempFunction.bind(this)
          })} */}

        </div>
    );
  }
}
