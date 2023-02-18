import { Pagination } from 'antd'
import { useState } from 'react'

import Style from './Pagination.module.css'

const PaginationJS = () => {
  const [current, setCurrent] = useState(3)
  const onChange = (page) => {
    setCurrent(page)
  }
  return (
    <div className={Style.pagination}>
      <Pagination current={current} onChange={onChange} total={50} />
    </div>
  )
}

export default PaginationJS
