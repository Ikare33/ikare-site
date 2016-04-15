'use strict'

const mockPath = './gulp/server/mockData/user.json'
const fs = require('fs-promise')

module.exports = (server) => {
  server.get('/isAvailable/:email', (req, res) => {
    fs.readJson(mockPath)
      .then(users => {
        const user = users.find(function(user){
          return user.email === req.params.email
        })
        if (user) {
          res.status(400).json({
            message: 'email is not availlable',
          })
        } else {
          res.send()
        }
      })
  })
}
