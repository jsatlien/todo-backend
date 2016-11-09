'use strict'

const User = use("App/Model/User")

class UserController {
  * create (request, response) {
    let data = request.only('email', 'name')
      //request.only gives us an object
    let user = yield User.create(data)

      response.json(user)
  }

  * show (request, response) {
    let userId = request.param('id')
      //request.param gives back the value of a single thing
    let user = yield User.find(userId)

    if (user) {
      response.json(user)
    } else {
      response.status(404)
      response.json({ error: 'No such user'})
    }
  }
}

module.exports = UserController
