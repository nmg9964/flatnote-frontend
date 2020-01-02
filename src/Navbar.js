import React from 'react'
import { NavLink } from 'react-router-dom';
import { hideNote, hideEdit } from './actions/notes'
import { connect } from 'react-redux'
 
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

  handleLogout = () => {
    this.props.hideNote()
    this.props.hideEdit()
  }

  render() {
    return (
      <div>
        <NavLink
          to='/login'
          exact
          style={link}
          onClick={this.handleLogout}
        >Logout</NavLink>
        <NavLink
          to='/note/new'
          exact
          style={link}
          >Add Note</NavLink>
        <h1 className='App'>FlatNote</h1>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  hideNote: () => dispatch(hideNote()),
  hideEdit: () => dispatch(hideEdit())
})

export default connect(null, mapDispatchToProps)(Navbar)