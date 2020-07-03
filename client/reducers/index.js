import {combineReducers} from 'redux'

import submitName from './submitName'
import submitScore from './score'
import questions from './questions'

export default combineReducers({
  submitName,
  questions,
  submitScore,
})