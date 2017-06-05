import React, { Component }      from 'react';
import { Switch, Route, Link }   from 'react-router-dom';
import Home                      from './Home/Home';
import Profile                   from './Profile/Profile';
import Host                      from './Host/Host';
import SearchBar                 from './SearchBar/SearchBar';
import Column                    from './Column/Column';
import AudioPlayer               from './AudioPlayer/AudioPlayer';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      audioStr: '',
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
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/host' component={Host}/>
          </Switch>

          <div className='sidebar'>
            <h1>Poddeck</h1>
            <SearchBar />
            <hr />
            <button>Column 1</button>
            <hr />
            <AudioPlayer />
          </div>

          {/* {this.props.children && React.cloneElement(this.props.children, {
            appState: this.state,
            tempFunction: this.tempFunction.bind(this)
          })} */}
        </div>
    );
  }
}
