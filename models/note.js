const mongoose = require('mongoose')

if ( process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const url2 = 'mongodb+srv://database_normal_user:normaali123@villen-cluster.pxg9c.mongodb.net/fullstack-user?retryWrites=true&w=majority'
const url = process.env.MONGODB_URI

mongoose.connect(url2)

const Note = mongoose.model('Note', {
    content: String,
    date: Date,
    important: Boolean
})

module.exports = Note