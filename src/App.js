import './App.css'
import React from 'react'

import BodyAPI from './Components/Body/BodyAPI'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Movies: [
        {
          id: 0,
          picture: '',
          genres: [{}],
          description: '',
          data: '',
          name: '',
          stars: 0.0,
          rank: 0.0,
        },
      ],
      Genres: [{ id: 0, name: 'qwe' }],
      isLoading: false,
      countPage: 0,
      totalPages: 0,
      inputSearch: '',
    }
    this.setMovie = this.setMovie.bind(this)
    this.setGenres = this.setGenres.bind(this)
    this.onLoading = this.onLoading.bind(this)
    this.setInput = this.setInput.bind(this)
  }

  setMovie(listMovies) {
    this.setState(() => {
      let res = listMovies.results.map((el) => {
        return {
          id: el.id,
          picture: el.poster_path,
          genres: el.genre_ids,
          description: el.overview,
          data: el.release_date,
          name: el.original_title,
          stars: el.popularity,
          rank: el.vote_average,
        }
      })
      return {
        Movies: res,
        totalPages: listMovies.total_pages,
      }
    })
  }

  setGenres(listGenres) {
    this.setState(() => {
      let res = listGenres.map((el) => {
        return {
          id: el.id,
          name: el.name,
        }
      })
      return {
        Genres: res,
      }
    })
  }

  onLoading(bool) {
    this.setState(() => {
      return {
        isLoading: bool,
      }
    })
  }
  setInput(message) {
    this.setState(() => {
      return {
        inputSearch: message,
      }
    })
  }
  render() {
    return (
      <div className="App">
        <BodyAPI
          inputSearch={this.state.inputSearch}
          setInput={this.setInput}
          Movies={this.state.Movies}
          Genres={this.state.Genres}
          setMovie={this.setMovie}
          setGenres={this.setGenres}
          isLoading={this.state.isLoading}
          onLoading={this.onLoading}
          totalPages={this.state.totalPages}
        />
      </div>
    )
  }
}
