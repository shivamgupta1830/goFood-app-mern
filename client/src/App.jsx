import "./App.css";

import React from "react";
import Home from "./screens/Home.jsx";
import { createBrowserRouter } from "react-router-dom";
import Login from "./screens/Login.jsx";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return <>{/* <Home />{" "} */}</>;
};

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
]);

export { App, appRouter };
