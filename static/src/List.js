import React from 'react'
import Item from './item'
import PropTypes from 'prop-types'

import {
  Grid
} from 'semantic-ui-react'

const List = ({
  data,
  incrementCount,
  decrementCount,
  deleteItem
}) => {
  return <Grid centered columns={2}>
    <Grid.Column>
      {data.map((item, index) => {
        return <Item
          data={item}
          index={index}
          incrementCount={incrementCount}
          decrementCount={decrementCount}
          deleteItem={deleteItem}
        />
      })}
    </Grid.Column>
  </Grid>
}

List.propTypes = {
  data: PropTypes.array,
  incrementCount: PropTypes.func,
  decrementCount: PropTypes.func,
  deleteItem: PropTypes.func
}

export default List

