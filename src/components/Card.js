import * as React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const topGradient = {
    background: "linear-gradient(to right, #A4C3F2, #E6EDFE)",
  };
  
  return (
    <Link className="cardLink" to={props.path}>
    <div className="cardBox">
      <div className="titleContainer" style={topGradient}>
        <h1 className="cardTitle">{props.title}</h1>
      </div>
      <div className="descContainer">
        <p className="desc">
          {props.description}
        </p>
      </div>
      <div className="attributesContainer">
      <div className="cardRow">
        <p className="attributesTextB">CPU:</p>
        <p className="attributesText">{props.cpu}</p>
      </div>
      <div className="cardRow">
        <p className="attributesTextB">RAM:</p>
        <p className="attributesText">{props.ram}</p>{" "}
      </div>
      {!props.gpu === false ?
      (<div className="cardRow">
        <p className="attributesTextB">GPU:</p>
        <p className="attributesText">{props.gpu}</p>{" "}
      </div>) : null}
      
      </div>
    </div>
    </Link>
  );
}
