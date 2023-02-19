import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})
const api_key = '?api_key=196d45759a6c5fd76144f918e98aceab'

export const MovieAPI = {
  Popular(page = 1) {
    return instance
      .get('movie/popular' + '?api_key=196d45759a6c5fd76144f918e98aceab' + '&page=' + page)
      .then((response) => response.data)
  },
  onID(idMovie) {
    return instance.get('movie/' + idMovie + api_key).then((response) => response.data)
  },
  Genres() {
    return instance.get('genre/movie/list' + api_key).then((response) => response.data)
  },
  Search(query) {
    return instance.get('search/movie' + api_key + '&query=' + query).then((response) => response.data)
  },
}
