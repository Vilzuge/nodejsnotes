const mongoose = require('mongoose')
const url = 'mongodb+srv://databasen_kayttaja:kayttaja123@villen-cluster.pxg9c.mongodb.net/fullstack-db?retryWrites=true&w=majority'

mongoose.connect(url)

const Note = mongoose.model('Note', {
    content: String,
    date: Date,
    important: Boolean
})

const note = new Note({
    content: 'Ja vielä kolmas muistiinpano...',
    date: new Date(),
    important: true
})

/*
//Tietokantaan muistiinpanon tallennus
note
    .save()
    .then(response => {
        console.log('note saved!')
        mongoose.connection.close()
})
*/

//Tietokannasta muistiinpanojen haku
Note
    .find({})
    .then(result => {
        result.forEach(note => {
            console.log(note)
        })
        mongoose.connection.close()
    })