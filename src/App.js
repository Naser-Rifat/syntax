import * as React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login/Login";
import Register from "./Auth/Register/Register";
import { useStateContext } from "./Contexts/ContextProvider";
import NavLayout from "./layouts/NavLayout";
import AddServices from "./pages/admin/AddServices";
import { LandingPage } from "./pages/client/landingpage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const {
    firebaseContext: { admin, user },
  } = useStateContext();

  const routes = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element:
        localStorage.getItem("admin") === "true" ? (
          <NavLayout />
        ) : (
          <Navigate to="/login" />
        ),
      children: [{ path: "", element: <AddServices /> }],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  const allRoutes = useRoutes(routes);
  return <div>{allRoutes}</div>;
}

export default App;
