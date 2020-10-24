import React, { useState } from "react";
import { Menu, PageHeader } from "antd";
import {
 PoweroffOutlined
} from "@ant-design/icons";
import { useUserContext } from "../context/UserContext";
const { SubMenu } = Menu;

const NavBarComponent = () => {
  const [currentMenu, setCurrentMenu] = useState("");
  const context = useUserContext();
  return (
    <PageHeader
      className="site-page-header"
      style={{border: "0.5px solid lightgray"}}
      onBack={context.logout}
      backIcon={<PoweroffOutlined />}
      title="Dashboard"
    />
  );
};

export default NavBarComponent;
