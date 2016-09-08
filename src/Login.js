import React, {Component} from 'react';
import {hashHistory, Link} from 'react-router';
import Rebase from 're-base'

const base = Rebase.createClass({
    apiKey: "AIzaSyD98Sn5YE1YKCoPnLrUtA1Yc8sXAJd5Ls0",
    authDomain: "orlando-demo-6a14e.firebaseapp.com",
    databaseURL: "https://orlando-demo-6a14e.firebaseio.com",
    storageBucket: "",
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ["Kevin"]
    }
  }

  addUser() {
    this.rebaseRef = base.syncState('users', {
      context: this,
      // state: 'list',
      asArray: true,
      state: "users",

      then() {
        hashHistory.push('/chat');
      }
    });
  }

  render() {
    return (
      <div className="login-form">
        <h3>Login</h3>
        <input type="text" name="username" placeholder="Username"/>
        <br/>
        <input type="password" name="password" placeholder="Password"/>
        <br/>
        <input type="button" className="login" value="Login" onClick={() => this.addUser()}/>
        <br/>
        <Link to="/register" className="newBtn">New user, sign up now and be cool</Link>
      </div>
    );
  }
}

export default Login
