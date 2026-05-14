import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
        <h1 className='card-title'>{props.username}</h1>
        <h3 className='card-subtitle'>{props.title}</h3>
        <p className='card-description'>{props.description}</p>
        <button className='card-button'>Read More</button>
    </div>
  )
}

export default Card;