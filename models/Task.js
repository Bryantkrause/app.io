module.exports = (model, Schema) => {
    const Task = new Schema({
      task: String,
      assignedTo: String,
      status: String
    })
    return model('Task', Task)
  }