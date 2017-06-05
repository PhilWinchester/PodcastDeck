//React Imports
import React        from 'react';
import ReactDOM     from 'react-dom';
import {
  // Switch,
  // Route,
  BrowserRouter as Router}
                    from 'react-router-dom';
//Component Imports
import App          from './components/App.jsx';
import Login        from './components/Login/Login';
import Profile      from './components/Profile/Profile';
import Host         from './components/Host/Host';

// mount our App at #root-container
// ReactDOM.render(
//   <App />,
//   document.querySelector('#root-container')
// );
ReactDOM.render((
    <Router >
      {/* <Switch >
        <Route exact path='/' component={App}/>
        <Route path='/user' component={Profile}/>
        <Route path='/host' component={Host}/>
      </Switch> */}
      <App />
    </Router>
  ), document.getElementById('root-container'));
