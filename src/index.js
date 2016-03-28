import axios from 'axios'
import pendingAction from './pending-action'
import success from './success'
import error from './error'
import notValid from './not-valid'

export default (actionType, url, options) => {
  if (notValid(actionType, url)) {
    throw new Error('makeRequest: Invalid arguments')
  }
  return (dispatch) => {
    dispatch(pendingAction(actionType))
    return axios(url, options)
      .then(success(dispatch, actionType))
      .catch(error(dispatch, actionType))
  }
}

