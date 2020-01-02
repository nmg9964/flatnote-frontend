import React, { Component } from 'react';
import NoteList from '../components/NoteList'
import { connect } from 'react-redux'
import Navbar from '../Navbar'

class NoteContainer extends Component {
  render() {
    return <div>
      <Navbar />
      <NoteList notes={this.props.notes}/>
    </div>
  }
}

const mapStatetoProps = state => {
  return {
    notes: state.notes
   }
}

export default connect(mapStatetoProps)(NoteContainer)