import { Col, Row, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Banner: React.FC = () => {
  return (
    <div className="main__img">
      <Space
        direction="vertical"
        style={{ width: "100%", paddingInline: 50 }}
        size={[0, 48]}
      >
        <Row>
          <Col
            span={24}
            style={{
              fontSize: "18px",
              fontWeight: "300",
              textTransform: "uppercase",
              lineHeight: "25px",
              letterSpacing: "10px",
              marginBottom: "0px",
              color: "#303030",
            }}
          >
            A React Pet Progect
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            style={{
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "35px",
              fontWeight: "600",
              textTransform: "uppercase",
              lineHeight: "48px",
              letterSpacing: "28px",
              marginBottom: "0",
              color: "#303030",
            }}
          >
            Welcome to Blog
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
