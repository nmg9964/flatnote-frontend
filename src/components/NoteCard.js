import React, { Component } from 'react';

class NoteCard extends Component {
  render() {
    return (
      <div className='render-note'>
        <h3>{this.props.note.title}</h3>
        <p1>{this.props.note.content}</p1><br></br>
        <button>Delete</button> <button>Edit</button>
      </div>
    )
  }
}

export default NoteCard