import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteNote } from '../actions/notes'
import { hideNote } from '../actions/notes'
import { withRouter } from 'react-router'

class NoteCard extends Component {

  handleDelete = (note) => {
    const reqObj = 
    {
      method: 'DELETE',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
    }

    fetch(`http://localhost:3001/notes/${note.id}`, reqObj)
    this.props.deleteNote(note)
    this.props.hideNote()
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div className='render-note'>
        <h3>{this.props.note.title}</h3>
        <p>{this.props.note.content}</p><br></br>
        <button>Edit</button><br></br>
        <button onClick={() => this.handleDelete(this.props.note)}>Delete</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  deleteNote: note => dispatch(deleteNote(note)),
  hideNote: () => dispatch(hideNote())
})

export default connect(null, mapDispatchToProps)(withRouter(NoteCard))