const mongoose = require('mongoose')
const url = 'mongodb+srv://database_normal_user:normaali123@villen-cluster.pxg9c.mongodb.net/fullstack-user?retryWrites=true&w=majority'

mongoose.connect(url)

const Note = mongoose.model('Note', {
    content: String,
    date: Date,
    important: Boolean
})

module.exports = Note