import React, { useEffect } from 'react'

import MovieCard from '../MovieCard/MovieCard'
import { MovieAPI } from '../../API/MovieAPI'

import Style from './Body.module.css'

const Body = (props) => {
  const API = async () => {
    props.onLoading(true)
    const resMovie = await MovieAPI.Popular()
    //const resGenres = await MovieAPI.Genres()
    props.setMovie(resMovie.results)
    //props.setGenres(resGenres.results)
    props.onLoading(false)
  }
  useEffect(() => {
    API().then()
  }, [])
  let ElementsMovie = props.Movies.map((el) => <MovieCard key={el.id} el={el} isLoading={props.isLoading} />)
  return <div className={Style.Body}>{ElementsMovie}</div>
}
export default Body
