import React, { Component } from 'react';

class NoteList extends Component {
  state = {
    showNote: false
  }

  toggleNote = () => {
    this.setState({ showNote: !this.state.showNote })
  }

  render() {
    return <div>
      {this.props.notes.map(note => {
        return <h3 onClick={this.toggleNote}>{note.title}</h3>
      })}
    </div>
  }
}

export default NoteList