import React from 'react'

import MovieCard from '../MovieCard/MovieCard'

import Style from './Body.module.css'

const Body = () => {
  return (
    <div className={Style.Body}>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  )
}
export default Body
