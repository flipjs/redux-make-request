import test from 'ava'
import rejectedAction from '../src/rejected-action'

test('rejectedAction - should return an object', (t) => {
  t.same(rejectedAction('ACTION_TYPE')('some data'), {
    type: 'ACTION_TYPE_REJECTED',
    payload: 'some data'
  })
})
