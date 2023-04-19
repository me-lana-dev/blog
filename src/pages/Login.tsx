import React from "react";
import LoginForm from "../components/LoginForm";
import { Card, Layout, Row } from "antd";

const Login: React.FC = () => {
  return (
    <Layout className="v100">
      <Row justify="center" align="middle" className="v100">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
