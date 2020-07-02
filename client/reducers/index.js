import { combineReducers } from 'redux'

import questions from './questions'
import loading from './loading'

const reducer = combineReducers({
    questions: questions,
    loading: loading,
})

export default reducer