import 'whatwg-fetch'

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  }

  const error = new Error(response.statusText)
  error.response = response
  error.body = response.json()
  throw error
}

export default function request (url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then((data) => ({ data }))
    .catch((err) => ({ err }))
}
