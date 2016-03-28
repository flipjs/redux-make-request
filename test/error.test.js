import test from 'ava'
import error from '../src/error'

// mock dispatch
const dispatch = (obj) => obj

test('error - should return a valid error', async function (t) {
  try {
    await error(dispatch, 'ACTION_TYPE')({error: 'some error'})
  } catch (err) {
    t.same(err, {error: 'some error'})
  }
})
