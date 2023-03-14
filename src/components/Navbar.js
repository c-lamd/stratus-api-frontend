import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {SidebarData} from "./SidebarData";
import "./Navbar.css";
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const linearGradient = {    background: 'linear-gradient(#C4D9FA,#6899FB)'};
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color:'undefined'}}>
            <div className='navbar'>
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <BsIcons.BsFillCloudFill className='brandIcon'/>
                <h1 className='brandName'>Stratus API</h1>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"} style={linearGradient}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item,index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                        })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;