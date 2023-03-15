import React from "react";
import "./Projects.css";
import Card from "../components/Card";
import { DefaultVMS } from "../components/DefaultVMS";
import { Link } from "react-router-dom";

function CreateProj() {
  return (
    <div className="CreateProj">
      <h1 className="title">Create Project</h1>
      <h2 className="subtitle">CPU Only</h2>
      <div className="cardContainer">
        {DefaultVMS.map((item, index) => {
          if (!item.gpu) {
            return <Card title={item.title} description={item.description} cpu={item.cpu} ram={item.ram}/>;
          }
        })}
      </div>
      <h2 className="subtitle">CPU + GPU</h2>
      <div className="cardContainer">
      {DefaultVMS.map((item, index) => {
          if (item.gpu) {
            return <Card title={item.title} description={item.description} cpu={item.cpu} gpu={item.gpu} ram={item.ram}/>;
          }
        })}
      </div>
    </div>
  );
}

export default CreateProj;
