import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login'
import NoteContainer from './containers/NoteContainer'
import AddNoteForm from './components/AddNoteForm'
import EditNoteForm from './components/EditNoteForm'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={NoteContainer}/>
        <Route exact path='/note/new' component={AddNoteForm}/>
        <Route exact path='/note/edit' component={EditNoteForm}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
