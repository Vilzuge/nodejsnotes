
const mongoose = require('mongoose')

//Muistiinpanojen skeeman määrittely tietokannalle
const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
})

module.exports = Note