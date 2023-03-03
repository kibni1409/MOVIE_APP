import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})
const api_key = '?api_key=196d45759a6c5fd76144f918e98aceab'

export const MovieAPI = {
  Popular(page = 1) {
    return instance
      .get('movie/popular' + '?api_key=196d45759a6c5fd76144f918e98aceab' + '&page=' + page)
      .then((response) => response)
  },
  Genres() {
    return instance.get('genre/movie/list' + api_key).then((response) => response)
  },
  Search(query, page = 1) {
    return instance.get('search/movie' + api_key + '&query=' + query + '&page=' + page).then((response) => response)
  },
  GuestAuth() {
    return instance.get('authentication/guest_session/new' + api_key).then((response) => response)
  },
  Rated(movieID, ratedCount, guest_session_id) {
    return instance
      .post('movie/' + movieID + '/rating' + api_key + '&guest_session_id=' + guest_session_id, {
        value: ratedCount,
      })
      .then((response) => response)
  },
  ListRated(guest_session_id) {
    return instance.get('guest_session/' + guest_session_id + '/rated/movies' + api_key).then((response) => response)
  },
}
