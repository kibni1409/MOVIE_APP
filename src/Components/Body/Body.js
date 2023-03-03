import React, { useState } from 'react'
import { Alert, Tabs } from 'antd'

import Search from '../Search/Search'
import { Consumer } from '../../App'

import Style from './Body.module.css'
import PaginationJS from './../Pagination/Pagination'
import ElementsMovie from './ElementsMovie/ElementsMovie'
import ElementsMovieRated from './ElementsMovieRated/ElementsMovieRated'

const Body = (props) => {
  let [tabs, setTabs] = useState(1)
  const onChange = (key) => {
    setTabs(key)
  }
  const items = [
    {
      key: 1,
      label: 'Search',
    },
    {
      key: 2,
      label: 'Rated',
    },
  ]
  return (
    <Consumer>
      {(state) => {
        let ElementsMovieArray = (
          <>
            <ElementsMovie
              isLoading={state.isLoading}
              Movies={state.Movies}
              Genres={state.Genres}
              tabs={props.tabs}
              postRated={props.postRated}
            />
            <PaginationJS inputSearch={state.inputSearch} setMovie={props.setMovie} totalPages={state.totalPages} />
          </>
        )
        let ElementsMovieRatedArray = (
          <>
            <ElementsMovieRated
              RatedMovies={state.RatedMovies}
              tabs={props.tabs}
              postRated={props.postRated}
              isLoading={state.isLoading}
              Genres={state.Genres}
            />
            <PaginationJS
              inputSearch={state.inputSearch}
              setMovie={props.setMovie}
              totalPages={state.totalPagesRated}
            />
          </>
        )
        return (
          <div className={Style.Body}>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            <Search setMovie={props.setMovie} setInput={props.setInput} />
            {state.Movies.length !== 0 ? null : <Alert message="I'm sorry, but there are no such films" type="error" />}
            {state.error === undefined ? null : <Alert message={state.error} type="error" />}
            <div className={Style.listCards}>
              {tabs === 1 ? ElementsMovieArray : null}
              {tabs === 2 ? ElementsMovieRatedArray : null}
            </div>
          </div>
        )
      }}
    </Consumer>
  )
}

export default Body
