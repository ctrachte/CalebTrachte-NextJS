import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer, faPlay } from '@fortawesome/free-solid-svg-icons'

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { collapsed: true };
    this.Open = this.Open.bind(this);
    this.hoverMenu = this.hoverMenu.bind(this);
    this.Close = this.Close.bind(this);
  }

  hoverMenu(event) {
    event.preventDefault();
    this.state.collapsed ? this.Open() : this.Close();
  }

  Open() {
    this.setState({ collapsed: false });
  }
  Close() {
    this.setState({ collapsed: true });
  }

  render() {
    return (
      <div className="SideMenuContainer">
      <ProSidebar collapsed={this.state.collapsed} onMouseEnter={this.hoverMenu} onMouseLeave={this.hoverMenu} >
        <Menu>
          <MenuItem icon={<FontAwesomeIcon icon={faPlay} />}>Datepicker Sandbox</MenuItem>
          <SubMenu title="Documentation" icon={<FontAwesomeIcon icon={faHammer} />}>
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