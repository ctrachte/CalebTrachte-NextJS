import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

class SideMenu extends React.Component {

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  Open() {
    this.setState({ opened: false });
  }
  Close() {
    this.setState({ opened: false });
  }

  render() {
    return (
      <div class="SideMenuContainer">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>Example Implementation</MenuItem>
          <SubMenu title="Documentation">
            <MenuItem>Initialization</MenuItem>
            <MenuItem>.Value()</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      </div>
    );
  }
}

export default SideMenu;