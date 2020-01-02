import React, { Component } from 'react'
import Navbar from '../Navbar'
import { connect } from 'react-redux'
import { addNote } from '../actions/notes'

class AddNoteForm extends Component {
  state = {
    title: '',
    content: ''
  }

  handleOnChange = event => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
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
        title: this.state.title,
        content: this.state.content,
        user_id: this.props.user.id
      })
    }

    fetch('http://localhost:3001/notes', reqObj)
    .then(resp => resp.json())
    .then(note => {
      this.props.addNote(note)
      this.props.history.push('/dashboard')
    })
    this.setState({ title: '', content: '' })
  }

  render() {
    return (
    <div>
      <Navbar />
      <h1>New Note</h1>
      <form onSubmit={this.handleOnSubmit}>

        Title |
        <input
        type='text'
        name='title'
        value={this.state.title}
        onChange={this.handleOnChange}/><br></br>

        Content |
        <textarea 
        name="content" 
        cols="40" rows="5"
        value={this.state.content}
        onChange={this.handleOnChange}/><br></br>

        <input value='Save' type='submit'/>
      </form>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.currentUser
})

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteForm)
