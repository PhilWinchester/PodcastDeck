import React, { Component }           from 'react';
// import {
//   Switch,
//   Route,
//   BrowserRouter as Router}
//                     from 'react-router-dom';
// import Login                          from './Login/Login';
// import Profile                        from './Profile/Profile';
// import Host                           from './Host/Host';
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

          {/* <Router >
            <Switch >
              <Route exact path='/' component={App}/>
              <Route path='/user' component={Profile}/>
              <Route path='/host' component={Host}/>
            </Switch>
          </Router> */}

          {this.props.children && React.cloneElement(this.props.children, {
            appState: this.state,
            tempFunction: this.tempFunction.bind(this)
          })}

        </div>
    );
  }
}
