export default (actionType) => (payload) => ({
  type: `${actionType}_FULFILLED`,
  payload
})

