import React from 'react'
import { List } from 'antd'
import { Access } from './aclItem'

export default function Accesslist(props) {

  return (
    <List
      grid={{ gutter: 16, xs: 1, md: 3, lg: 3 }}
      dataSource={props.data}
      renderItem={(access, idx) => (
        <List.Item key={idx}>
          <Access uri={access.value} context={access.context} />
        </List.Item>
      )}
    />
  )
}
