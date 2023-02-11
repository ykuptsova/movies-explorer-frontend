import React from 'react';
import './Header.css';

class Header extends React.Component {

  render () {
    return (
      <div className="header">
        { this.props.currentUser && this.renderLoggedIn() }
        { !this.props.currentUser && this.renderLoggedOut() }
      </div>
    )  
  }


  renderLoggedIn () {
    return <div>LOGGED IN</div>
  }


  renderLoggedOut () {
    return <div>LOGGED OUT</div>
  }

}

export default Header; 