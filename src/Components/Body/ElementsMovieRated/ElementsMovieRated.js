import React from 'react'

import MovieCard from '../../MovieCard/MovieCard'

const ElementsMovieRated = (props) => {
  return props.RatedMovies.map((el) => (
    <MovieCard
      key={el.id}
      postRated={props.postRated}
      el={el}
      isLoading={props.isLoading}
      Genres={props.Genres}
      tabs={props.tabs}
    />
  ))
}

export default ElementsMovieRated
