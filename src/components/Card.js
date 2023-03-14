import * as React from 'react';
import "./Card.css"
export default function Card(props) {
    const topGradient={
        background: 'linear-gradient(to right, #A4C3F2, #E6EDFE)'
      }
    return (
        <div className='cardBox'>
            <div className='titleContainer' style={topGradient}>
                <h1 className='cardTitle'>Title</h1>
            </div>
            <p>{props.title}</p>
            <p>Description</p>
        </div>
    );
}