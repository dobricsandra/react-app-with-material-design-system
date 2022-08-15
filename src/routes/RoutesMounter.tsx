import { Routes, Route } from "react-router-dom";

import { routes, RouteGuard } from "routes";

const RoutesMounter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          element={
            <RouteGuard>
              <route.page />
            </RouteGuard>
          }
          key={route.key}
        />
      ))}
      <Route path="*" element={<div>Nothing here!</div>} />
    </Routes>
  );
};

export default RoutesMounter;
