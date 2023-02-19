import React, { useEffect } from 'react'

import { MovieAPI } from '../../API/MovieAPI'

import Body from './Body'

const BodyAPI = (props) => {
  const API = async () => {
    props.onLoading(true)
    const resMovie = await MovieAPI.Popular()
    const resGenres = await MovieAPI.Genres()
    props.setMovie(resMovie)
    props.setGenres(resGenres.genres)
    props.onLoading(false)
  }
  useEffect(() => {
    API().then()
  }, [])
  return (
    <Body
      inputSearch={props.inputSearch}
      setInput={props.setInput}
      totalPages={props.totalPages}
      setMovie={props.setMovie}
      Movies={props.Movies}
      Genres={props.Genres}
      isLoading={props.isLoading}
    />
  )
}
export default BodyAPI
