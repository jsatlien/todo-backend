'use strict'

const Task = use("App/Model/Task")

class TaskController {

    * create (request, response) {
      let userId = request.param('id')
      let listId = request.param('list_id')
      let data = request.only('title', 'due_date')
      data.list_id = listId

      let newTask = yield Task.create(data)
      response.json(newTask)
    }
}

module.exports = TaskController
