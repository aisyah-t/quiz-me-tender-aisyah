import {RECEIVE_SCORE} from '../actions'

function submitScore (state = {team1:[], team2:[], team3:[]}, action) {
  switch (action.type) {
    case RECEIVE_SCORE:
      return {
          team1: [...state.team1, action.team1],
          team2: [...state.team2, action.team2],
          team3: [...state.team3, action.team3],
      }
    default:
      return state
  }
}

export default submitScore