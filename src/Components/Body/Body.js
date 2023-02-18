import React from 'react'

import MovieCard from '../MovieCard/MovieCard'
import Filter from '../Filter/Filter'

import Style from './Body.module.css'
import PaginationJS from './../Pagination/Pagination'

const Body = (props) => {
  let ElementsMovie = props.Movies.map((el) => (
    <MovieCard key={el.id} el={el} isLoading={props.isLoading} Genres={props.Genres} />
  ))
  return (
    <div className={Style.Body}>
      <Filter />
      <div className={Style.listCards}>{ElementsMovie}</div>
      <PaginationJS />
    </div>
  )
}
export default Body
