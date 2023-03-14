import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import CreateProj from "./Routes/CreateProj";
import Home from "./Routes/Home";
import Projects from "./Routes/Projects";
import Navbar from "./components/Navbar";
import "./App.css";

const AppLayout = () => (
    <>
        <Navbar/>
        <Outlet/>
    </>
);

const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children:[{
            // once the home component is available, 
            // change paths to match ie change next path to /projects etc
            path: "/", 
            element: <Home/>,
          },
          {
            path: "projects",
            element: <Projects/>,
          },
          {
            path: "createproj",
            element: <CreateProj/>,
          }]
    },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);