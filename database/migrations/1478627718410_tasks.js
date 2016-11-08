'use strict'

const Schema = use('Schema')
//Task (belongs to a to do list)
// 1. id (integer primary key (pk))
// 2. title (varchar)
// 3. due_date date
// 4. create_at date
// 5. list_id (foreign key (fk))
// 6. done boolean
//
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
