import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/explore">Home</a>
    </Menu.Item>
    <SubMenu title={<span className="howfar">Blogs</span>}>
      <MenuItemGroup title="accomodation">
        <Menu.Item key="setting:1">coming soon</Menu.Item>
        <Menu.Item key="setting:2">coming soon</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="transportation">
        <Menu.Item key="setting:3">coming soon</Menu.Item>
        <Menu.Item key="setting:4">coming soon</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu