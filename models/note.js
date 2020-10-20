const mongoose = require('mongoose')
const url2 = 'mongodb+srv://databasen_kayttaja:kayttaja123@villen-cluster.pxg9c.mongodb.net/fullstack-db?retryWrites=true&w=majority'

if ( process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const url = process.env.MONGODB_URI

mongoose.connect(url2)

const Note = mongoose.model('Note', {
    content: String,
    date: Date,
    important: Boolean
})

module.exports = Note