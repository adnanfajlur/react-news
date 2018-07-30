import React from "react";
import { Responsive, Button, Input, Menu, Segment } from "semantic-ui-react";

class AppMenu extends React.Component {
  state = { active: "home" };

  handleItemClick = (e, { name }) => {
    console.log(name);
    this.setState({ active: name });
  };
  render() {
    const MenuListData = [
      {
        content: "Home",
        name: "home"
      },
      {
        content: "Messages",
        name: "messages"
      }
    ];
    const { active } = this.state;
    const MainMenu = {
      backgroundColor: "#2F3032"
    };
    const listMenu = MenuListData.map(item => (
      <Menu.Item
        key={item.name}
        style={{ color: "#FFFFFF" }}
        active={active === item.name}
        content={item.content}
        name={item.name}
        onClick={this.handleItemClick}
      />
    ));
    return <Menu style={MainMenu}>{listMenu}</Menu>;
  }
}
export default AppMenu;
