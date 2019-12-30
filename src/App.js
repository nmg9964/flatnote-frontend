import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login'
import NoteContainer from './containers/NoteContainer'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={NoteContainer}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
