import React, {Component} from 'react';
import {Link} from 'react-router'

class Register extends Component {
  //   // Create
  // base.createUser({
  //   email: this.refs.username,
  //   password: this.refs.password
  // }, userHandler);
  //
  // // Reset Password
  // base.resetPassword({
  //   email: ''
  // }, errorHandler);

  render() {
    return (
      <div className="login-form">
        <h3>Login</h3>
        <input type="text" name="username" placeholder="Username" ref="username"/>
        <br/>
        <input type="password" name="password" placeholder="Password" ref="password"/>
        <br/>
        <input type="button" className="register" value="Register"/>
        <br/>
        <Link to="/" className="newBtn">If you're already cool, go login!</Link>
      </div>
    );
  }
}

export default Register
