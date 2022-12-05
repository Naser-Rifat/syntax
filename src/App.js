import * as React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/client/landingpage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const routes = [
    {
      path: "/",
      element: <LandingPage />,
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
