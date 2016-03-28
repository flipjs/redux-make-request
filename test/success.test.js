import test from 'ava'
import success from '../src/success'

// mock dispatch
const dispatch = (obj) => obj

test('success - should return a valid data', async function (t) {
  const data = await success(dispatch, 'ACTION_TYPE')({data: 'some data'})
  t.same(data, {data: 'some data'})
})
