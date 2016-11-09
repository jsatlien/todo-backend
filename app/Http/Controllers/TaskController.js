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

    * index (request, response) {
      let listId = request.param('list_id')
      let viewTasks = yield Task.query().where('list_id', listId)
      if (viewTasks) {
      response.json(viewTasks)
      } else {
        response.json({error: 'No tasks yet!'})
      }
    }
}

module.exports = TaskController
