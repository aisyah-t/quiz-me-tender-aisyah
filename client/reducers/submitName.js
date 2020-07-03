import {RECEIVE_NAMES} from '../actions'

function submitName (state = {}, action) {
  switch (action.type) {
    case RECEIVE_NAMES:
      return {
          team1: action.team1,
          team2: action.team2,
          team3: action.team3,
      }
    default:
      return state
  }
}

export default submitName