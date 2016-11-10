'use strict'

const Schema = use('Schema')

class TasksTableSchema extends Schema {

  up () {
    this.table('tasks', (table) => {
      table.dropColumn('created_on')
    })
  }

  down () {
    this.drop('tasks')
  }

}

module.exports = TasksTableSchema
