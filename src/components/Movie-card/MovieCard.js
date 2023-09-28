import React from 'react'
import styles from './MovieCard.module.css';
const MovieCard = (props) => {
  return (
    <>
      <div className={styles.card}>
        <img src={props.img} alt="" className={styles.pic1} / >
            <p>Movie Name: {props.movieName}</p>
            <p>Years:{props.year}</p>
      </div>
    </>
  )
}

export default MovieCard
