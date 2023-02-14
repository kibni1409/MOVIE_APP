import React from 'react'

import Style from './MovieCard.module.css'

const MovieCard = () => {
  return (
    <div className={Style.MovieCard}>
      <div className={Style.MovieCard__picture}> Pictures </div>
      <div className={Style.MovieCard__infoBlock}>
        <div className={Style.MovieCard__header}>
          <p className={Style.MovieCard__name}>Name</p>
          <div className={Style.MovieCard__rank}>6,6</div>
        </div>
        <div className={Style.MovieCard__data}>March 5, 2020</div>
        <ul className={Style.MovieCard__genreList}>
          <li className={Style.MovieCard__genre}>Action</li>
          <li className={Style.MovieCard__genre}>Drama</li>
        </ul>
        <p className={Style.MovieCard__description}>
          A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction
          attempts to regain his soul and salvation by becoming the coach of a disparate ethnically mixed high...
        </p>
        <ul className={Style.MovieCard__starList}>
          <li className={Style.MovieCard__star}>*</li>
          <li className={Style.MovieCard__star}>*</li>
          <li className={Style.MovieCard__star}>*</li>
          <li className={Style.MovieCard__star}>*</li>
          <li className={Style.MovieCard__star}>*</li>
          <li className={Style.MovieCard__star}>*</li>
          <li className={Style.MovieCard__star}>*</li>
          <li className={Style.MovieCard__star}>*</li>
          <li className={Style.MovieCard__star}>*</li>
          <li className={Style.MovieCard__star}>*</li>
        </ul>
      </div>
    </div>
  )
}
export default MovieCard
