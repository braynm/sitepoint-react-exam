import request from './utils'

const getAll = () => {
  return request(`./api/v1/counters`, {
    method: 'GET',
    headers: new Headers()
  })
    .then(response => {
      return response
    })
}

const createItem = (data) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', 'application/json')
  return request(`./api/v1/counter`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  })
    .then(response => {
      return response
    })
}

const deleteItem = (data) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', 'application/json')
  return request(`./api/v1/counter`, {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify(data)
  })
    .then(response => {
      return response
    })
}

const incrementItem = (data) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', 'application/json')
  return request(`./api/v1/counter/inc`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  })
    .then(response => {
      return response
    })
}

const decrementItem = (data) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', 'application/json')
  return request(`./api/v1/counter/dec`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  })
    .then(response => {
      return response
    })
}

export default {
  getAll,
  createItem,
  deleteItem,
  incrementItem,
  decrementItem
}
