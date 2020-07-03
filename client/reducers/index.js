import {combineReducers} from 'redux'

import submitName from './submitName'
import questions from './questions'

export default combineReducers({
  submitName,
  questions
})