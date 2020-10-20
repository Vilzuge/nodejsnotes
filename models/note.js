const mongoose = require('mongoose')
mongoose.set('useUnifiedTopology', true);

const url = process.env.MONGODB_URI

mongoose.connect(url)


const Note = mongoose.model('Note', {
    content: String,
    date: Date,
    important: Boolean
})

module.exports = Note