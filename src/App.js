import * as React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import "./App.css";
import { useStateContext } from "./Contexts/ContextProvider";
import NavLayout from "./layouts/NavLayout";
import { LandingPage } from "./pages/client/landingpage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const {
    firebaseContext: { admin },
  } = useStateContext();
  console.log(admin);
  const routes = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/",
      element: admin ? <NavLayout /> : <NavLayout />,
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
