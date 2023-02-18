import { Input } from 'antd'

import Style from './Filter.module.css'

const Filter = () => {
  return (
    <div className={Style.filter}>
      <Input placeholder="Type to search..." />
    </div>
  )
}

export default Filter
