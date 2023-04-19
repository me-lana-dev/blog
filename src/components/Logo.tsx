import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Logo: React.FC = () => {
  const goHome = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/" ? (
        <span className="logo">Logo</span>
      ) : (
        <span
          className="logo logo-link"
          onClick={() => {
            goHome("/");
          }}
        >
          Logo
        </span>
      )}
    </>
  );
};

export default Logo;
