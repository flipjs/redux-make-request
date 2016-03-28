export default (actionType) => (payload) => ({
  type: `${actionType}_REJECTED`,
  payload
})

