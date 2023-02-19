import { Input } from 'antd'

import { MovieAPI } from '../../API/MovieAPI'

import Style from './Search.module.css'

const Search = (props) => {
  function debounce(func, wait, immediate) {
    let timeout

    return function executedFunction() {
      const context = this
      const args = arguments

      const later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }

      const callNow = immediate && !timeout

      clearTimeout(timeout)

      timeout = setTimeout(later, wait)

      if (callNow) func.apply(context, args)
    }
  }
  const onSearch = debounce(async function (e) {
    let res = await MovieAPI.Search(e.target.value)
    props.setMovie(res.results)
  }, 500)
  return (
    <div className={Style.Search}>
      <Input placeholder="Type to search..." onChange={onSearch} />
    </div>
  )
}

export default Search
