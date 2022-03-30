const express = require('express');
 
const todoRoute = express.Router();
let todo = require('./model');
 
// Add todo
todoRoute.route('/add-todo').post((req, res, next) => {
    todo.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
 
// Get all todo
todoRoute.route('/').get((req, res) => {
    todo.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
// Get todo
todoRoute.route('/read-todo/:id').get((req, res) => {
    todo.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
 
// Update todo
todoRoute.route('/update-todo/:id').put((req, res, next) => {
    todo.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error)
      return next(error);
    } else {
      res.json(data)
      console.log('todo updated successfully!')
    }
  })
})
 
// Delete todo
todoRoute.route('/delete-todo/:id').delete((req, res, next) => {
    todo.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
 
module.exports = todoRoute;