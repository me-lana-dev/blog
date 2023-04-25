import { MenuProps, Menu, Divider } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { UserOutlined } from "@ant-design/icons";
import { useActions } from "../hooks/useActions";
import { RouteNames } from "../router";

const Navbar: React.FC = () => {
  const router = useNavigate();
  const { pathname, state } = useLocation();
  console.log(pathname, state);

  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  const items: MenuProps["items"] = [
    {
      label: "HOME",
      key: "/",
    },
    {
      label: "ABOUT",
      key: "about",
    },
    {
      label: "POSTS",
      key: "posts",
    },
    {
      label: "CONTACTS",
      key: "contacts",
    },
  ];

  const [current, setCurrent] = useState("/");

  const onClick: MenuProps["onClick"] = (e) => {
    router(e.key);
    setCurrent(e.key);
  };

  return (
    <div className="menu__wrap">
      <Menu
        mode="horizontal"
        className="menu"
        items={items}
        onClick={onClick}
        selectedKeys={[current]}
        style={{
          textAlign: "right",
          fontSize: "14px",
          textTransform: "uppercase",
        }}
      ></Menu>
      <Divider type="vertical" />
      {isAuth ? (
        <>
          <span
            style={{ color: "#000", marginLeft: "25px", fontWeight: "600" }}
          >
            {user.username}
          </span>
          <Menu
            mode="horizontal"
            className="menu menu-2"
            selectable={false}
            onClick={() => logout()}
            items={[
              {
                label: "LOGOUT",
                key: 1,
                icon: <UserOutlined />,
              },
            ]}
          />
        </>
      ) : (
        <Menu
          mode="horizontal"
          className="menu-2"
          selectable={false}
          onClick={() => router(RouteNames.LOGIN)}
          items={[
            {
              label: "LOGIN",
              key: RouteNames.LOGIN,
              icon: <UserOutlined />,
            },
          ]}
        />
      )}
    </div>
  );
};

export default Navbar;
