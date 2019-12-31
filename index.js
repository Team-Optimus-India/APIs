const { getAllAnswers } = require('./stackoverflow')

getAllAnswers().then(data => console.log(data))
