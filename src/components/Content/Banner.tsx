import { Col, Row, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Banner: React.FC = () => {
  return (
    <div className="main__img">
      <Space direction="vertical" className="banner" size={[0, 20]}>
        <Row>
          <Col span={24}>
            <div className="banner__header">A React Pet Progect</div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="banner__msg">Welcome to Blog</div>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{}}>
            <Link
              to="/about"
              className="main__btn"
              state={{ currentlink: "about" }}
            >
              About
            </Link>
            <Link
              to="https://github.com/me-lana-dev/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="main__btn"
            >
              GitHub
            </Link>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default Banner;
