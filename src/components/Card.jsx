import React from 'react';
import styles from '../assets/scss/card.module.scss';

function Card({ image, title, text, color }) {
  const styles = {
    color: `var(${color})`,
  };

  return (
    <article style={{ backgroundColor: `var(${color})` }}>
      <img src={image} alt="car" />
      <h1>{title}</h1>
      <p>{text}</p>
      <button style={{ color: `var(${color})` }}>Learn More</button>
    </article>
  );
}

export default Card;
