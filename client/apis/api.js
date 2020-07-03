import request from 'superagent'

export function getQuestions() {
    return request.get('/questions')
        .then(res => res.body)
}

