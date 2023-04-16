import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth/pages/LoginPage";

import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "../heroes/routes/PrivateRoute";
import { PublicRoutes } from "../heroes/routes/PublicRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={} /> */}
      </Routes>
    </>
  );
};
