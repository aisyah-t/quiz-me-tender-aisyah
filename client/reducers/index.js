import { combineReducers } from 'redux'

import questions from './questions'

const reducer = combineReducers({
    questions: questions,
})

export default reducer