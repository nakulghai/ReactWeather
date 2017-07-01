import React from 'react';
import {Link} from 'react-router';

class NavBar extends React.Component {
  render(){
    return(
      <div>
        <Link to="/">Weather</Link> | <Link to="about">About</Link> | <Link to="page">Page</Link>
      </div>
    );
  }
}

export default NavBar;
