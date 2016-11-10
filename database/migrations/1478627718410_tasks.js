'use strict'

const Schema = use('Schema')

class TasksTableSchema extends Schema {

  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.timestamps()
      table.string('title')
      table.date('created_on')
      table.date('due_date')
      table.integer('list_id')
      table.boolean('complete')
    })
  }

  down () {
    this.drop('tasks')
  }

}

module.exports = TasksTableSchema
