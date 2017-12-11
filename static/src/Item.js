import React from 'react'
import css from 'styled-components'
import PropTypes from 'prop-types'
import {
  Input,
  Button
} from 'semantic-ui-react'

const ItemContainer = css.div`
  padding: 15px;
  clear: both;
`

const UpdateActionContainer = css.div`
  float: right;
`

const Name = css.span`
  font-size: 20px;
  padding: 10px;
`

const Item = ({
  data,
  index,
  incrementCount,
  decrementCount,
  deleteItem
}) => {
  return (
    <ItemContainer>
      <Button onClick={() => deleteItem(data)} content='Delete' icon='delete' labelPosition='left' color='red' />
      <Name>{data.title}</Name>
      <UpdateActionContainer>
        <Button
          content='Decrement'
          icon='minus'
          labelPosition='minus'
          color='red'
          onClick={() => {
            decrementCount(data.count, index)
          }}
        />
        <Input value={data.count} />
        <Button
          content='Increment'
          icon='plus'
          labelPosition='plus'
          color='green'
          onClick={() => {
            incrementCount(data.count, index)
          }}
        />
      </UpdateActionContainer>
    </ItemContainer>
  )
}

Item.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
  incrementCount: PropTypes.func,
  decrementCount: PropTypes.func,
  deleteItem: PropTypes.func
}

export default Item
