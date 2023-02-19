import React from 'react'
import { Alert } from 'antd'

import MovieCard from '../MovieCard/MovieCard'
import Search from '../Search/Search'

import Style from './Body.module.css'
import PaginationJS from './../Pagination/Pagination'

const Body = (props) => {
  let ElementsMovie = props.Movies.map((el) => (
    <MovieCard key={el.id} el={el} isLoading={props.isLoading} Genres={props.Genres} />
  ))
  return (
    <div className={Style.Body}>
      <Search setMovie={props.setMovie} />
      {props.Movies.length !== 0 ? null : <Alert message="I'm sorry, but there are no such films" type="error" />}
      <div className={Style.listCards}>{ElementsMovie}</div>
      <PaginationJS />
    </div>
  )
}
export default Body
