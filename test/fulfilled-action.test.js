import test from 'ava'
import fulfilledAction from '../src/fulfilled-action'

test('fulfilledAction - should return an object', (t) => {
  t.same(fulfilledAction('ACTION_TYPE')('some data'), {
    type: 'ACTION_TYPE_FULFILLED',
    payload: 'some data'
  })
})
