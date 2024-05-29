import React from "react";
import { Layout } from "antd";

const TemplateFooter: React.FC = () => {
  const { Footer } = Layout;
  return (
    <Footer className="footer">
      <p>
        <span>© 2023 Blog | Blog Pet Project developed by</span>&nbsp;
        <a
          href="https://github.com/me-lana-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lana Kaliush
        </a>
      </p>
    </Footer>
  );
};

export default TemplateFooter;
