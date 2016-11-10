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

    * delete (request, response) {
      let taskId = request.param('task_id')
      let deleteTask = yield Task.query().where('id', taskId).del()
      if (taskId) {
      response.json('Task removed!')
      } else {
      response.json({error: 'No task to remove.'})
      }
    }

    * update (request, response) {
      let taskId = request.param('task_id')
      let newData = request.only('title', 'due_date')

      let updatedTask = yield Task.findBy('id', taskId)
      updatedTask.fill(newData)

      response.json(updatedTask)
    }
}

module.exports = TaskController
