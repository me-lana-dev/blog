import React from "react";
import { Col, Row, Space } from "antd";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  return (
    <>
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
            <h1 className="page-header">About</h1>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={48}>
            <div className="page-content">
              <p>
                Этот pet-проект разработан для обучения, улучшения навыков
                программирования и&nbsp;тренировки в&nbsp;таких технологиях,
                как: JavaScript, TypeScript, React, маршрутизации с&nbsp;React
                Router DOM v6, Redux, Axios, AntDesign.
              </p>
              <p>
                Сам по себе проект представляет собой простейший блог.
                Для&nbsp;тестирования использованы данные из free fake API&nbsp;
                {`{JSON}`}&nbsp;Placeholder.
              </p>
              <p>
                Есть админ панель. У блога существует 10 пользователей
                с&nbsp;username от user1 до user9, а&nbsp;также&nbsp;admin.
                Пароль у каждого из них&nbsp;–&nbsp;123. Для авторизации
                используется Local Storage. У каждого из них есть возможность
                добавлять, редактировать и удалять свои статьи из блога.
              </p>
            </div>
          </Col>
        </Row>
        <Row justify="center" className="page-bottom">
          <Col>
            <Link
              to="/posts"
              className="main__btn"
              state={{ currentlink: "posts" }}
            >
              Перейти к блогу
            </Link>
          </Col>
        </Row>
      </Space>
    </>
  );
};

export default AboutPage;
