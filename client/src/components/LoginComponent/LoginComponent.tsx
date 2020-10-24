import {
  ExclamationOutlined,
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Input, message, Tooltip } from "antd";
import { Form } from "antd";
import FormItem from "antd/lib/form/FormItem";
import FormItemInput from "antd/lib/form/FormItemInput";
import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { mediumRegex } from "../../constants";
import { Login } from "../../context/RestClient";
import { useSocketContext } from "../../context/SocketContext";
import { useUserContext } from "../../context/UserContext";
import "./LoginComponent.scss";

const LoginComponent = () => {
  const [form] = Form.useForm();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const history = useHistory();
  const userContext = useUserContext();

  const onSubmit = (values: any) => {
    setSubmitting(true);
    Login(username, password).then((result:any) => {
      setSubmitting(false);
      if (result.success)
      {
        message.success("Logged In");
        history.push('/game');
      }
      else {
        message.error("Incorrect username or password");
      }
    })
  };
  const onCancel = () => {
    setVisible(false);
    setLoading(false);
  };
  const onConfirm = () => {
    setLoading(true);

    setLoading(false);
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <Form
          name="normal_login"
          form={form}
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
        >
          <h1>The Best RPG</h1>
          <h3>Sign In</h3>
          <FormItem
            hasFeedback
            name="username"
            rules={[
              { required: true, message: "Username is Required!" }
            ]}
          >
            <Input
              autoComplete={"off"}
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </FormItem>
          <Tooltip trigger={["focus"]} title={"Coming Soon"} placement="right">
            <Form.Item
              hasFeedback
              name="password"
              rules={[
                {
                  required: true,
                  message: "Password is Required!",
                },
              ]}
            >
              <Input.Password
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                prefix={<LockOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
          </Tooltip>
          <FormItem>
            <Button
              loading={submitting}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <span style={{ marginLeft: 10 }}>
              Or <Link to="register">register now!</Link>
            </span>
          </FormItem>
        </Form>
      </div>
    </div>
  );
};
export default LoginComponent;
