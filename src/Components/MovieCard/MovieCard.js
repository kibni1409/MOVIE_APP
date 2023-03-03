import React from 'react'

import ElementsCardLoading from './ElementsCard/ElementsCardLoading'
import ElementsCard from './ElementsCard/ElementsCard'

const MovieCard = ({ el, postRated, Genres, isLoading }) => {
  let img
  el.picture !== null ? (img = 'https://image.tmdb.org/t/p/w500' + el.picture) : (img = 'error')
  return (
    <>
      {!isLoading ? <ElementsCard el={el} postRated={postRated} img={img} Genres={Genres} /> : <ElementsCardLoading />}
    </>
  )
}
export default MovieCard
