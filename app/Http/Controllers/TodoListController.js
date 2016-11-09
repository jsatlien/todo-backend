'use strict'

const List = use("App/Model/List")
//if we are using a model in the controller, don't forget to import that model
//using the above syntax.
class TodoListController {

    * example (request, response) {

    }

    * create (request, response) {
      let userId = request.param('id')
      let data = request.only('name')
      //remember that request.only gives us back an object, therefore on the next
      //line we can simply add a property to that object for the user_id:
      data.user_id = userId

      let todoList = yield List.create(data)
      response.status(201).json(todoList)
    }

    * index (request, response) {
      let userId = request.param('id')
      let todoLists = yield List.query().where('user_id', userId)
      if (todoLists) {
      response.json(todoLists)
      } else {
        response.json({error: 'List does not exist.'})
      }
    }

}

module.exports = TodoListController
