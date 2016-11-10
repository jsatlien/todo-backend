'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

// normally have a Route for each action you want to take and a controller for each model

Route.on('/').render('welcome')
Route.get('/example', 'TodoListController.example')


Route.post('/users', 'UserController.create')
Route.get('/users/:id', 'UserController.show')
Route.delete('/users/:id', 'UserController.delete')

Route.post('/users/:id/lists', 'TodoListController.create')
Route.get('/users/:id/lists', 'TodoListController.index')

Route.post('/users/:id/lists/:list_id/tasks', 'TaskController.create')
Route.get('users/:id/lists/:list_id/tasks', 'TaskController.index')
Route.delete('users/:id/lists/:list_id/tasks/:task_id', 'TaskController.delete')
Route.put('users/:id/lists/:list_id/tasks/:task_id', 'TaskController.update')
