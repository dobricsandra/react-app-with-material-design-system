import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { routeKeyPathMapper } from "routes";
import { Header } from "components";

const RouteGuard = ({ children }: { children?: ReactNode }) => {
  const loggedIn = true;

  if (window.location.pathname === routeKeyPathMapper.login) {
    return <>{children}</>;
  }

  if (loggedIn) {
    return (
      <>
        <Header />
        {children}
      </>
    );
  }

  return <Navigate to="/login" replace />;
};

export default RouteGuard;
