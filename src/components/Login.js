import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser } from '../actions/users'

class Login extends Component {
  state = {
    username: '',
    notes: []
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
        username: this.state.username,
        notes: this.state.notes
      })
    }

    fetch('http://localhost:3001/users', reqObj)
    .then(resp => resp.json())
    .then(user => {
      console.log(user)
      this.props.addUser(user)
      this.props.history.push('/dashboard')
    })
    this.setState({ username: '', notes: [] })
  }

  render() {
    return <form className='App-header' onSubmit={(event) => this.handleOnSubmit(event)} >
    <h1>FlatNote</h1>
    <input type="text" name="username" placeholder="Username" onChange={(event) => this.handleOnChange(event)}/><br></br>
    <input type="submit" value="Login" />
  </form>
  }
}

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user))
})

export default connect(null, mapDispatchToProps)(Login)