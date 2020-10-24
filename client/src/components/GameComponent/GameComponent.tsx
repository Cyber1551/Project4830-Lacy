import {
    ExclamationOutlined,
    LockOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import {
    Badge,
    Button,
    Checkbox,
    Descriptions,
    Input,
    message,
    Modal,
    Tooltip,
  } from "antd";
  import { Form } from "antd";
  import FormItem from "antd/lib/form/FormItem";
  import FormItemInput from "antd/lib/form/FormItemInput";
  import React, { useEffect, useState } from "react";
  import { Link, useHistory } from "react-router-dom";
  import { useUserContext } from "../../context/UserContext";
  import { mediumRegex } from "../../constants";
  import NavBarComponent from "../NavBarComponent";
  import "./GameComponent.scss";
  
  const DashboardComponent = () => {
    const context = useUserContext();
    const history = useHistory();

    const logout = () => {
      context.logout();
    };
  
    return (
      <div>
        <NavBarComponent />
  
        <Descriptions title="User Info" bordered>
          <Descriptions.Item label="Email">{context.user?.username}</Descriptions.Item>
        </Descriptions>
      </div>
    );
  };
  export default DashboardComponent;
  