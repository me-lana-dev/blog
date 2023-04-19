import React from "react";
import { Card, Layout, Row } from "antd";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Admin: React.FC = () => {
  const { user } = useTypedSelector((state) => state.auth);

  return (
    <Layout className="v100">
      <Row justify="center" align="middle" className="v100">
        <Card>
          <h1 style={{ textAlign: "center", margin: "50px" }}>
            Hello, {user.name}!
          </h1>
        </Card>
      </Row>
    </Layout>
  );
};

export default Admin;
