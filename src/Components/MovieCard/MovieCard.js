import React from 'react'

import Style from './MovieCard.module.css'

const MovieCard = ({ el }) => {
  let img = null //= 'https://imgholder.ru/183/281/adb9ca&text=Image+loading&font=bitter&fz=24'
  if (el.picture) {
    img = 'https://image.tmdb.org/t/p/w185' + el.picture
  }
  // let ElementsGenres = null
  // if (isLoading === false) {
  //   ElementsGenres = el.genres.map((g) => (
  //     // eslint-disable-next-line react/jsx-key
  //     <li key={el.id} className={Style.MovieCard__genre}>
  //       {g}
  //     </li>
  //   ))
  // }
  return (
    <div className={Style.MovieCard}>
      <img className={Style.MovieCard__picture} src={img} alt={el.picture}></img>
      <div className={Style.MovieCard__infoBlock}>
        <div className={Style.MovieCard__header}>
          <p className={Style.MovieCard__name}>{el.name}</p>
          <div className={Style.MovieCard__rank}>{el.rank}</div>
        </div>
        <div className={Style.MovieCard__data}>{el.data}</div>
        {/*<ul className={Style.MovieCard__genreList}>{ElementsGenres}</ul>*/}
        <p className={Style.MovieCard__description}>{el.description}</p>
      </div>
    </div>
  )
}
export default MovieCard
