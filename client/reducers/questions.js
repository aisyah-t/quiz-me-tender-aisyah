import { RECEIVE_QUESTIONS } from '../actions'


const reducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return action.questions
        default:
            return state
    }
}

export default reducer