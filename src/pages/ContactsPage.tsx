import React from "react";
import { Col, Row, Space } from "antd";

const ContactsPage: React.FC = () => {
  return (
    <Space
      direction="vertical"
      style={{ width: "100%", paddingInline: 50 }}
      size={[0, 24]}
    >
      <Row>
        <Col
          span={24}
          style={{
            fontFamily: "Josefin Sans, sans-serif",
            fontSize: "18px",
            fontWeight: "300",
            textTransform: "uppercase",
            lineHeight: "25px",
            letterSpacing: "10px",
            marginBottom: "0px",
            color: "#303030",
          }}
        >
          <h1 className="page-header">Contacts</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={48}>
          <div className="page-content page-contacts">
            <div className="contacts">
              <div className="contacts-col">
                <p>
                  <span>Зайти на gitHub: </span>
                  <a
                    href="https://github.com/me-lana-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              </div>
              <div className="contacts-col">
                <p>
                  <span>Написать в telegram: </span>
                  <a
                    href="https://t.me/meLanaDev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @meLanaDev
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Space>
  );
};

export default ContactsPage;
