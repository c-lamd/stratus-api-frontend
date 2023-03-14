import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Projects",
        path: "/projects",
        icon: <AiIcons.AiOutlineProject />,
        cName: "nav-text",
    },
    {
        title: "Create Project",
        path: "/createproj",
        icon: <AiIcons.AiOutlineAppstoreAdd />,
        cName: "nav-text",
    }

]