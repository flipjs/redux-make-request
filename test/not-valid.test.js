import test from 'ava'
import notValid from '../src/not-valid'

// function notValid (actionType, url)

test('notValid - should return true if no arguments  are passed', (t) => {
  t.true(notValid())
})

test('notValid - should return true if first argument is invalid', (t) => {
  t.true(notValid(null))
  t.true(notValid(undefined))
  t.true(notValid({}))
  t.true(notValid([]))
  t.true(notValid(null, 'string'))
  t.true(notValid(undefined, 'string'))
  t.true(notValid({}, 'string'))
  t.true(notValid([], 'string'))
})

test('notValid - should return true if second argument is invalid', (t) => {
  t.true(notValid('string'))
  t.true(notValid('string', null))
  t.true(notValid('string', undefined))
  t.true(notValid('string', {}))
  t.true(notValid('string', []))
})

test('notValid - should return true if both arguments are invalid', (t) => {
  t.true(notValid(null, null))
  t.true(notValid(undefined, undefined))
  t.true(notValid({}, {}))
  t.true(notValid([], []))
})

test('notValid - should return false if both arguments are valid', (t) => {
  t.false(notValid('string', 'string'))
})

