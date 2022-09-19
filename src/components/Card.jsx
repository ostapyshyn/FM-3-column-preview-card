import React from 'react';
import styles from '../assets/scss/card.module.scss';

function Card({ image, title, text, color }) {
  return (
    <main style={{ backgroundColor: `var(${color})` }}>
      <article>
        <img src={image} alt="car" />
        <h1>{title}</h1>
        <p>{text}</p>
        <button style={{ color: `var(${color})` }}>Learn More</button>
      </article>
    </main>
  );
}

export default Card;
