import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react';


class Footer extends Component {
  render() {
    return (
      <div>
        <Menu text attached='bottom'>
        <Menu.Item header>Copyrigth {new Date().getFullYear()}</Menu.Item>
      </Menu>
      </div>
    )
  }
}

export default Footer