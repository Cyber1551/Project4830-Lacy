import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, message, Tooltip } from "antd";
import { Form } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mediumRegex } from "../../constants";
import { Register } from "../../context/RestClient";
import "./RegisterComponent.scss";

const RegisterComponent = () => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (values: any) => {
    setSubmitting(true);
    Register(username, password).then((result:any) => {
      setSubmitting(false);
      if(result.success)
      {
        message.success("You can now sign in!");
      }
      else 
      {
        message.error("Username taken")
      }
    })
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <Form
          name="normal_register"
          className="login-form"
          form={form}
          onFinish={onSubmit}
        >
          <h1>The Best RPG</h1>
          <h3>Register</h3>
          <FormItem
            name="username"
            rules={[
              { required: true, message: "Email is Required!" }
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
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Password is Required!",
              },
              {
                validator(rule, value) {
                  if (mediumRegex.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Passwords doesn't meet Requirements!");
                },
              },
            ]}
            hasFeedback
          >
            <Input.Password
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Passwords must match!");
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Confirm Password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="submit-form-button"
            >
              Register
            </Button>
            <span style={{ marginLeft: 10 }}>
              Or <Link to="/">login!</Link>
            </span>
          </FormItem>
        </Form>
      </div>
    </div>
  );
};
export default RegisterComponent;
