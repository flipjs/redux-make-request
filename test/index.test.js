import test from 'ava'
import makeRequest from '../src'

test('makeRequest', (t) => {
  t.same(makeRequest(), undefined)
})

