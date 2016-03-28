import fulfilledAction from './fulfilled-action'

export default (dispatch, actionType) => (response) => {
  dispatch(fulfilledAction(actionType)(response))
  return Promise.resolve(response)
}

