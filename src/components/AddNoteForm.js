import React, { Component } from 'react'
import Navbar from '../Navbar'

class AddNoteForm extends Component {
  state = {
    title: '',
    content: ''
  }

  render() {
    return (
    <div>
      <Navbar />
      <h1>New Note</h1>
      <form>

        Title |
        <input
        type='text'
        value={this.state.title}/><br></br>

        Content |
        <textarea 
        name="textarea" 
        cols="40" rows="5"
        value={this.state.content}>
        </textarea><br></br>
        <input value='Save' type='submit'/>
      </form>
    </div>
    )
  }
}

export default AddNoteForm
