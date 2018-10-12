import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  rightNavs = () => {
    return (
      <Menu.Menu position='right'>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          { this.rightNavs() }
          <Link to='/Characters'>
            <Menu.Item name='characters' />
          </Link>
          <Link to='/Locations'>
          <Menu.Item name='locations' />
          </Link>
        </Menu>
      </div>
    );
  }
}

export default NavBar;
