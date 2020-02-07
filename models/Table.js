module.exports = (model, Schema) => {
  const Table = new Schema({
    title: {
      type: String,
      uppercase: true,
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    task: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    board: [{ type: Schema.Types.ObjectId, ref: 'Board' }],
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  }, { timestamps: { createdAt: 'birthday', updatedAt: 'lastUpdated' } })

  return model('Table', Table)
}