import React from "react";
import "antd/dist/antd.css";
import "./login.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {  withRouter } from "react-router-dom";

const NormalLoginForm = (props) => {
  //   const history = useHistory();
  const onFinish = (values) => {
    if (values.username === "admin" && values.password === "admin") {
      props.history.push("/dashboard/crimerate");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Local Police Data Analysis</h3>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
};

export default withRouter(NormalLoginForm);
