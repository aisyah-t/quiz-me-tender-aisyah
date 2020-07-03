import request from 'superagent'

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export const requestQuestions = () => {
    return {
        type: REQUEST_QUESTIONS,
    }
}

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions: questions
    }
}

export function fetchQuestions() {
    return (dispatch) => {
        dispatch(requestQuestions())
        return request
            .get('/questions')
            .then(res => {
                dispatch(receiveQuestions(res.body))
            })
            .catch(err => {
                console.log(err)
                // dispatch(showError(err.message))
            })
    }
}