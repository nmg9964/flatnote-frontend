import React from 'react'
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background:  'SteelBlue',
  textDecoration: 'none',
  color: 'white',
  float: 'right',
}
 
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to='/login'
          exact
          style={link}
        >Logout</NavLink>
        <NavLink
          to='/dashboard'
          exact
          style={link}
          >Add Note</NavLink>
        <h1 className='App'>FlatNote</h1>
      </div>
    )
  }
}

export default Navbar