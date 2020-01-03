import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editNote } from '../actions/notes'

class EditNoteForm extends Component {
  state = {
    title: this.props.note.title,
    content: this.props.note.content
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
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content
      })
    }

    fetch(`http://localhost:3001/notes/${this.props.note.id}`, reqObj)
    .then(resp => resp.json())
    .then(note => {
      this.props.editNote(note)
    })
    this.setState({ title: this.props.note.title, content: this.props.note.content })
  }

  render() {
    return (
    <div>
      <h3>Edit Note</h3>
      <form onSubmit ={this.handleOnSubmit}>

        Title &nbsp;&nbsp;
        <input
        type='text'
        name='title'
        value={this.state.title}
        onChange={this.handleOnChange}/><br></br><br></br>

        Content &nbsp;&nbsp;
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

const mapDispatchToProps = dispatch => ({
  editNote: note => dispatch(editNote(note))
})

export default connect(null, mapDispatchToProps)(EditNoteForm)