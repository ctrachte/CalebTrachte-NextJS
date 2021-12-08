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
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>
          <SubMenu title="Components">
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    );
  }
}

export default SideMenu;