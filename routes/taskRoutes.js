const { Task } = require('../models')

module.exports = app => {
  app.post('/api/task', (req, res) =>{
      console.log(req.body)
    Task.create(req.body)
    .then( response => res.json(response) )
    .catch(e => console.error(e))
  })
  app.get('/api/tasks', (req, res) => {
    Task.find()
    .then(items => res.json(items))
    .catch(e => console.error(e))
  })
  app.delete('/api/task/:id', (req, res) => {
    Task.deleteOne( { _id: req.params.id } ) // Get the row of the task of the ID.
      .then( response => res.json(response) )
      .catch(e => console.error(e))
  })
  app.put('/api/task/:id', (req, res) => {
    Task.updateOne({ _id: req.params.id}, { $set: req.body})
      .then( response => res.json(response) )
      .catch(e => console.error(e))
  })
}
