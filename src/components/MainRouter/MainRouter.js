import React, { Component }    from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home                    from '../Home/Home';
import Profile                 from '../Profile/Profile';
import Host                    from '../Host/Host';
import './MainRouter.css';

export default class MainRouter extends Component {
  render() {
    return (
      <div>
        <h1>MainRouter Component</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/host'>Host</Link></li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/host' component={Host}/>
          </Switch>
        </main>
      </div>
    );
  }
}
