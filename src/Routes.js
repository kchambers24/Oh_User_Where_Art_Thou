import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from './App'
import Login from './Login'
import Chat from './Chat'
import Register from './Register'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Login}/>
      <Route path='/register' component={Register}/>
      <Route path='/chat' component={Chat}/>

    </Route>
  </Router>
)

export default routes
