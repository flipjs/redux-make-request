import rejectedAction from './rejected-action'

export default (dispatch, actionType) => (response) => {
  dispatch(rejectedAction(actionType)(response))
  return Promise.reject(response)
}

