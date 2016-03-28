import test from 'ava'
import pendingAction from '../src/pending-action'

test('pendingAction - should return an object', (t) => {
  t.same(pendingAction('ACTION_TYPE'), {
    type: 'ACTION_TYPE_PENDING'
  })
})
