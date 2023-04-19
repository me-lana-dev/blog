import { Col, Layout, Row, Space } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import Navbar from "./Navbar";

const LayoutPage: React.FC = () => {
  const { Header, Footer, Content } = Layout;

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header className="header">
          <Row
            justify="space-between"
            align="middle"
            style={{ minHeight: "100%" }}
          >
            <Col span={4}>
              <Logo />
            </Col>
            <Col span={20}>
              <Navbar />
            </Col>
          </Row>
        </Header>
        <Content className="main">
          <Outlet />
        </Content>
        <Footer className="footer">
          © 2023 Blog | Blog Pet Project developed by
          <a
            href="http://https://github.com/me-lana-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;Lana Kaliush
          </a>
        </Footer>
      </Layout>
    </Space>
  );
};

export default LayoutPage;
