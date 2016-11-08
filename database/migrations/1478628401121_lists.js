'use strict'


// To-do List (to do list belongs to the user)
// 1. id (integer primary key (pk))
// 2. user_id (foreign key)
// 3. name (varchar)

const Schema = use('Schema')

class ListsTableSchema extends Schema {

  up () {
    this.create('lists', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id')
      table.string('name')
    })
  }

  down () {
    this.drop('lists')
  }

}

module.exports = ListsTableSchema
