import React, { Component }      from 'react';
import { Switch, Route, Link }   from 'react-router-dom';
import Home                      from './Home/Home';
import Profile                   from './Profile/Profile';
import Host                      from './Host/Host';
import SearchBar                 from './SearchBar/SearchBar';
import AudioPlayer               from './AudioPlayer/AudioPlayer';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      audioStr: '',
      episodeQueue: [],
      columns: [],
      user: {
        username: '',
        id: ''
      }
    }
  }

  addColumn() {
    console.log('adding column');
  }

  render() {
    return (
        <div>
          <div className='sidebar'>
            <h1>Poddeck</h1>
            <SearchBar />
            <hr />
            {this.state.columnIds}
            <hr />
            <button onClick={() => this.addColumn()}>Add Column</button>
            <AudioPlayer audioStr={this.state.audioStr} />
          </div>

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/host' component={Host}/>
          </Switch>
          {/* {this.props.children && React.cloneElement(this.props.children, {
            appState: this.state,
            tempFunction: this.tempFunction.bind(this)
          })} */}
        </div>
    );
  }
}
