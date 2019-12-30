import React, { Component } from 'react';
import { connect } from 'react-redux'

class Login extends Component {
  state = {
    username: ''
  }

  handleOnChange = event => {
    this.setState({ username: event.target.value })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    // fetch(url)
    .then()
    .then(user => {
      // dispatch action to the store
      // reroute to /dashboard
    })
    this.props.addUser(this.state.username)
    this.setState({ username: '' })
  }

  render() {
    return <form className='App-header' onSubmit={(event) => this.handleOnSubmit(event)} >
    <h1>Flatnote</h1>
    <input type="text" name="username" placeholder="Username" onChange={(event) => this.handleOnChange(event)}/><br></br>
    <input type="submit" value="Login" />
  </form>
  }
}

const mapDispatchToProps = dispatch => ({
  addUser: username => dispatch({ type: 'ADD_USER', username })
})

export default connect(null, mapDispatchToProps)(Login)