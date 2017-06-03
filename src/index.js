import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './components/App.jsx';

//React Router imports
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// mount our App at #root-container
// ReactDOM.render(
//   <App />,
//   document.querySelector('#root-container')
// );
ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="/user" component={Profile} />
        <Route path="/host" component={Host} />
      </Route>
    </Router>
  ), document.querySelector('#root-container'));
