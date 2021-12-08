import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer, faList } from '@fortawesome/free-solid-svg-icons'

class SideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();

    this.state = { collapsed: true };

    this.Open = this.Open.bind(this);
    this.hoverMenu = this.hoverMenu.bind(this);
    this.Close = this.Close.bind(this);
    this.executeScroll = this.executeScroll.bind(this);
  }


  executeScroll = () => this.myRef.current.scrollIntoView();    

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
          <MenuItem onClick={this.props.DatepickerScroll} icon={<FontAwesomeIcon icon={faHammer} />}>Datepicker Sandbox</MenuItem>
          <SubMenu title="Documentation" icon={<FontAwesomeIcon icon={faList} />}>
            <MenuItem ref={this.myRef}>Initialization</MenuItem>
            <MenuItem>.Value()</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      </div>
    );
  }
}

export default SideMenu;