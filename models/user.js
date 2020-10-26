const mongoose = require('mongoose')

//schema for the user mongo-object
const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  passwordHash: String,
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }]
})

//formatting the user
userSchema.statics.format = (user) => {
  return {
    id: user.id,
    username: user.username,
    name: user.name,
    notes: user.notes
  }
}
  
const User = mongoose.model('User', userSchema)
  
module.exports = User