const { getAllAnswers, getQuestions } = require('./stackoverflow')

// Stackoverflow
getAllAnswers().then(data =>
  console.log('getAllAnswers\n', JSON.stringify(data, null, 2))
)
getQuestions(['javascript', 'reactjs']).then(data =>
  console.log('getQuestions\n', JSON.stringify(data, null, 2))
)
