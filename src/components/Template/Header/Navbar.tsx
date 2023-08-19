import React, { useEffect, useState } from "react";
import { MenuProps, Menu, Divider } from "antd";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { UserOutlined } from "@ant-design/icons";
import { useActions } from "../../../hooks/useActions";
import { RouteNames } from "../../../router";

const Navbar: React.FC = () => {
  const router = useNavigate();
  const { pathname } = useLocation();
  const currentItemMenu = pathname.trim().split("/");
  const { state } = useLocation();

  const [current, setCurrent] = useState(currentItemMenu[1]);

  useEffect(() => {
    if (state) {
      setCurrent(state.currentlink);
    }
  }, [state]);

  const { isAuth, user } = useTypedSelector((state) => state.auth);
  //console.log("Navbar", "isAuth =", isAuth, "user =", user);
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
          minWidth: 0,
          flex: "auto",
          textAlign: "right",
          fontSize: "14px",
          textTransform: "uppercase",
        }}
      ></Menu>
      <Divider type="vertical" style={{ minWidth: 0 }} />
      {isAuth ? (
        <>
          <Link
            to="/admin"
            state={{ currentlink: "admin" }}
            style={{
              minWidth: 0,
              color: "#000",
              marginLeft: "25px",
              fontWeight: "600",
              fontFamily: "Hind, sans-serif",
            }}
          >
            ADMIN {user.username}
          </Link>
          <Menu
            style={{ minWidth: "102px", flexShrink: 1, flexGrow: 0 }}
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
        <>
          <Menu
            style={{ minWidth: "90px", flexShrink: 1, flexGrow: 0 }}
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
        </>
      )}
    </div>
  );
};

export default Navbar;
