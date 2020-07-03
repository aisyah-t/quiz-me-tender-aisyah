import request from 'superagent'

export const RECEIVE_NAMES = 'RECEIVE_NAMES'
export const REQUEST_NAMES = 'REQUEST_NAMES'

export const requestName = () => {
    return {
      type: REQUEST_NAMES
    }
  }
  
  export const submitName = (team1, team2, team3) => {
    return {
      type: RECEIVE_NAMES,
      team1, team2, team3
    }
  }

export function fetchName () {
    return (dispatch) => {
      dispatch(requestName())
      return request
        .then(res => {
          dispatch(submitName(res.body))
        })
        .catch(err => {
          console.log(err)
        })
    }
  }