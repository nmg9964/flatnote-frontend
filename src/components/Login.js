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

    const reqObj = 
    { 
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username
      })
    }

    fetch('http://localhost:3001/users', reqObj)
    .then(resp => resp.json())
    .then(user => {
      console.log(user)
      this.props.addUser(user.username)
      this.props.history.push('/dashboard')
    })
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