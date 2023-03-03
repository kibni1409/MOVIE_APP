import React from 'react'

import Style from '../MovieCard.module.css'

const ElementsGenres = (props) => {
  let genres = props.el.genres.map((gen) => props.Genres.find((item) => item.id === gen))
  return genres[0] !== undefined
    ? genres.map((gen) => (
        <div key={gen.id} className={Style.MovieCard__genre}>
          {gen.name}
        </div>
      ))
    : null
}

export default ElementsGenres
