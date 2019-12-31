import React, { Component } from 'react';
import NoteCard from './NoteCard'

class NoteList extends Component {
  state = {
    showNote: false
  }

  toggleNote = () => {
    this.setState({ showNote: !this.state.showNote })
  }

  render() {
    return <div>
      <h2>Your Notes</h2>
      {this.props.notes.map(note => {
        return (
          <div>
            <NoteCard key={note.id} note={note} showNote={this.state.showNote}/>
            <p onClick={this.toggleNote}>{note.title}</p>
          </div>
        )
      })}
      </div>
  }
}

export default NoteList