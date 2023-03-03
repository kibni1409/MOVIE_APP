import { Space, Spin } from 'antd'
import React from 'react'

const ElementsCardLoading = () => {
  return (
    <div
      className="exampleLoad"
      style={{
        width: '100%',
        height: '50vh',
      }}
    >
      <Space
        direction="vertical"
        style={{
          height: '100vh',
          width: '100%',
        }}
      >
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </Space>
    </div>
  )
}

export default ElementsCardLoading
