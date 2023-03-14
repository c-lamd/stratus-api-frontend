import React from "react";
import Card from "../components/Card";
import './Projects.css';
import * as BsIcons from 'react-icons/bs';
import { Link } from "react-router-dom";

function Projects() {
    return (
        <div className="pageContainer">
            <h1 className="title">Projects</h1>
            <div className="cardContainer">
                <Link to='../createproj' className='createCard' style={{ textDecoration: 'none' }}>
                    <BsIcons.BsCloudPlus className='addIcon'/>
                    <h3 className='createCardText'>Create New Project</h3>
                </Link>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card title="Hello"/>
            </div>
        </div>
    )
}

export default Projects;