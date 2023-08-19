import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import Error from "../pages/ErrorPage";
import { useTypedSelector } from "../hooks/useTypedSelector";
// import LayoutPage from "./LayoutPage";
import Template from "./Template";

const AppRouter: React.FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  return isAuth ? (
    <Routes>
      <Route path="/" element={<Template />}>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            index={route.index}
            element={<route.element />}
          />
        ))}
        <Route path="/login" element={<Navigate to="/admin" />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Template />}>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            index={route.index}
            element={<route.element />}
          />
        ))}
        <Route path="/admin" element={<Navigate to="/login" />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
