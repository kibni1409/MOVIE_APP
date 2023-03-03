import React from 'react'

import MovieCard from '../../MovieCard/MovieCard'

const ElementsMovie = (props) => {
  return props.Movies.map((el) => (
    <MovieCard
      key={el.id}
      postRated={props.postRated}
      el={el}
      isLoading={props.isLoading}
      Genres={props.Genres}
      setRatedMovie={props.setRatedMovie}
      tabs={props.tabs}
    />
  ))
}
export default ElementsMovie
