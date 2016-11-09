// 'use strict'

// const User = use("App/Model/User")
//
// class UserController {
//
//   * create (request, response)
//       let data = request.only('email', 'name')
//       let user = yield User.create(data)
//
//       response.json(user)
//   * delete (request, response)
//
//   * update (request, response)
// }

//
//
// module.exports = UserController

//the below code is for one column: user
// ./ace make: model User
//
// will give us:
//everything we need right now from this class is provided by Lucid. This
// includes the 'User.create(data)' method above.
// class User extends Lucid {
//
// }
