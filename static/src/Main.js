import React from 'react'
import {
  Grid,
  Input,
  Form,
  Button
} from 'semantic-ui-react'

import List from './List'
import request from './request'

export default class Main extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      list: [],
      input: {
        name: ''
      }
    }

    this.updateNameInput = this.updateNameInput.bind(this)
    this.updateCountInput = this.updateCountInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentDidMount () {
    // data fetched, set it to state.
    request.getAll()
      .then(response => {
        this.setState({ list: response.data })
      })
  }

  updateNameInput (e) {
    const input = this.state.input
    input.name = e.target.value
    this.setState({
      input
    })
  }

  updateCountInput (e) {
    const input = this.state.input
    input.count = e.target.value
    this.setState({
      input
    })
  }

  increment (count, index) {
    const list = this.state.list
    const item = list[index]
    item.count = item.count + 1
    this.setState({
      list
    })

    // http in background
    request.incrementItem(item)
  }

  decrement (count, index) {
    const list = this.state.list
    const item = list[index]
    if (item.count > 0) {
      item.count = item.count - 1
      request.decrementItem(item)
    }
    this.setState({
      list
    })

    // http in background
  }

  deleteItem (data) {
    request.deleteItem(data)
      .then(() => {
        request.getAll().then(response => this.setState({ list: response.data }))
      }).catch(error => {
        console.log('Something went wrong. Please try again later - ', error)
      })
  }

  handleSubmit () {
    request.createItem({
      title: this.state.input.name
    }).then(response => {
      // refetched, set it to state.
      request.getAll().then(response => this.setState({ list: response.data }))
      this.setState({
        input: {
          name: '',
          count: ''
        }
      })
    }).catch(error => {
      console.log('Something went wrong. Please try again later - ', error)
    })
  }

  render () {
    const { list, input: { name } } = this.state
    return (
      <div className='padded'>
        <Grid centered columns={2}>
          <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Field
                  id='name'
                  control={Input}
                  label='Name'
                  placeholder='Name'
                  value={name}
                  onChange={this.updateNameInput}
                />
              </Form.Group>
              <Button textAlign='right' type='submit' primary>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
        <List
          data={list}
          incrementCount={this.increment}
          decrementCount={this.decrement}
          deleteItem={this.deleteItem}
        />

        <Grid centered columns={2}>
          <Grid.Column>
            Total: {list.reduce((acc, v) => acc + parseInt(v.count), 0)}
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
