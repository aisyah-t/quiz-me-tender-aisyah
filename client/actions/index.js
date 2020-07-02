export const SET_QUESTIONS = 'SET_QUESTIONS'
export const SET_LOADING = 'SET_LOADING'

export function setQuestions(questions) {
    return {
        type: SET_QUESTIONS,
        questions: questions
    }
}

export function setLoading(loading) {
    return {
      type: SET_LOADING,
      loading: loading,
    }
  }

export function fetchQuestions(showLoading = true) {
    return dispatch => {
      // I'm about to get the questions
      if (showLoading) dispatch(setLoading(true))
      getQuestions()
        .then(questions => {
          // I've got the questions
          dispatch(setQuestions(questions))
          if (showLoading) dispatch(setLoading(false))
        })
        .catch(err => {
          if (showLoading) dispatch(setLoading(false))
        })
    }
  }