module.exports = (model, Schema) => {
    const Task = new Schema({
      task: String,
      assignedTo: String,
      assigned: Array,
      dueDate: String,
      priority: String,
      status: String,
      text: String,
      timeline: String,
      date: Date,
      numbers: Number,
      comments: String,
      table: [{ type: Schema.Types.ObjectId, ref: 'Table' }],
    })
    return model('Task', Task)
  }