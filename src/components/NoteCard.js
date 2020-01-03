import React, { Component } from 'react';
import EditNoteForm from './EditNoteForm'
import { connect } from 'react-redux'
import { deleteNote, hideNote, showEdit } from '../actions/notes'
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

  handleEdit = note => {
    this.props.showEdit(note)
  }

  render() {
    return (
      <div className='render-note'>
        {this.props.renderedEdit ?
          <EditNoteForm key={this.props.note.id} note={this.props.note}/>
        : <div>
            <h3>{this.props.note.title}</h3>
              <p>{this.props.note.content}</p><br></br>
              <button onClick={() => this.handleEdit(this.props.note)}>Edit</button><br></br>
              <button onClick={() => this.handleDelete(this.props.note)}>Delete</button><br></br><br></br>
              {console.log(this.props.note)}
              {this.props.note.tags.map(tag => {
                return `Tags: #${tag.text}`
              })}
          </div>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  renderedEdit: state.renderedEdit
})

const mapDispatchToProps = dispatch => ({
  deleteNote: note => dispatch(deleteNote(note)),
  hideNote: () => dispatch(hideNote()),
  showEdit: note => dispatch(showEdit(note))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NoteCard))