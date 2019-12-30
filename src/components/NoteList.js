import React, { Component } from 'react';

class NoteList extends Component {
  render() {
    return <div>
      <ul>
      {this.props.notes.map(note => {
        return <li>{note.title}</li>
      })}
      </ul>
    </div>
  }
}

export default NoteList