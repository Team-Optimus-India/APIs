const fetch = require('node-fetch')

module.exports.getAllAnswers = () => {
  return fetch(
    'https://api.stackexchange.com/2.2/answers?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&filter=default'
  ).then(response => {
    return response.json()
  })
}
