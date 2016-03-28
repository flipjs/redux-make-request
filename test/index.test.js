import test from 'ava'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import makeRequest from '../src'

// mock dispatch
const dispatch = (obj) => obj

test('makeRequest - should throw when arguments are invalid', (t) => {
  t.throws(() => {
    makeRequest()
  })
  t.throws(() => {
    makeRequest('ACTION_TYPE')
  })
  t.throws(() => {
    makeRequest(null, 'URL')
  })
})

test('makeRequest - should not throw when arguments are valid', (t) => {
  t.notThrows(() => {
    makeRequest('ACTION_TYPE', 'URL')
  })
})

// test.only('makeRequest - should be able to catch error', async function (t) {
//   await makeRequest('LOAD_DATA', '/nodata')(dispatch)
//     .catch((error) => {
//       console.log(error)
//       t.same(error.status, 404)
//     })
// })

test('makeRequest - should be able to fetch data', async function (t) {
  const mock = new MockAdapter(axios)
  const users = [
    { id: 1, name: 'Felipe Apostol' }
  ]

  mock.onGet('/users').reply(200, {users})

  await makeRequest('LOAD_USERS', '/users')(dispatch)
    .then((response) => {
      t.same(response.data.users, users)
    })
})

