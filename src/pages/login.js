import React, { Component } from "react";
import styles from "./login.css";

import { Login } from "ant-design-pro";
import { connect } from "dva";

const { UserName, Password, Submit } = Login;

@connect()
export default class extends Component {
  onSubmit = (err, values) => {
    console.log("用户输入：", values);
    if (!err) {
      // 校验通过，提交登录
      this.props.dispatch({ type: "user/login", payload: values });
    }
  };
  render() {
    return (
      <div className={styles.loginForm}>
        {/* logo */}
        <img
          className={styles.logo}
          src="http://pluspng.com/img-png/avengers-logo-png-file-marvel-s-the-avengers-film-logo-png-555.png"
        />
        {/* 登录表单 */}
        <Login onSubmit={this.onSubmit}>
          <UserName
            name="username"
            placeholder="web"
            rules={[{ required: true, message: "Please input the username" }]}
          />
          <Password
            name="password"
            placeholder="123"
            rules={[{ required: true, message: "Please input the password" }]}
          />
          <Submit>Login</Submit>
        </Login>
      </div>
    );
  }
}
