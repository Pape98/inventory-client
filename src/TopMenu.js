import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class TopMenu extends Component {
  render() {
    return (
        <Menu inverted attached size="massive" borderless>
              <Menu.Item header className="is-size-11">Inventory System</Menu.Item>
        </Menu>
    );
  }
}

export default TopMenu;
