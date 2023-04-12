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
import LandingPage from "./Routes/LandingPage";
import { useState } from "react";


function AppLayout() {
  // After administering proper AWS IAM roles, configure user authentication with cognito
  // and change the state of userAuthenticated to true
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  return (
  
    <>
    {userAuthenticated ?  
    <>
        <Navbar/>
        <Outlet/>
    </>  
        : <LandingPage/>}
       
    </>
)};

const router = createBrowserRouter([
    {
        element: <AppLayout />,
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