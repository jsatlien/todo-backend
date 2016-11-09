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
      // let lists = yield Todolist.quer
    }

    * show (request, response) {
    let listId = request.param('id')
      //request.param gives back the value of a single thing
    let list = yield List.find(listId)

    if (list) {
      response.json(list)
    } else {
      response.status(404)
      response.json({ error: 'No such list'})
    }
  }
}

module.exports = TodoListController
