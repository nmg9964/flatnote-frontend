import React, { Component } from 'react';

class Login extends Component {
  render() {
    return <form className='App-header'>
    <h1>Flatnote</h1>
    <input type="text" name="username" placeholder="Username" /><br></br>
    <input type="submit" value="Login" />
  </form>
  }
}

export default Login