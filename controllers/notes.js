/* eslint-disable no-unused-vars */
const notesRouter = require('express').Router()
const Note = require('../models/note')
const User = require('../models/user')

//Muistiinpanojen routejen määrittely omassa tiedostossaan


//Kaikkien muistiinpanojen haku
notesRouter.get('/', (request, response) => {
  Note
    .find({})
    .then(notes => {
      response.json(notes.map(Note.format))
    })
})

notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({})
  response.json(notes.map(Note.format))
})


//Yksittäisen muistiinpanon haku
notesRouter.get('/:id', async (request, response) => {
  try {
    const note = await Note.findById(request.params.id)

    if (note) {
      response.json(Note.format(note))
    } else {
      response.status(404).end()
    }

  } catch (exception) {
    console.log(exception)
    response.status(400).send({ error: 'malformatted id' })
  }
})

//Yksittäisen muistiinpanon poistaminen
notesRouter.delete('/:id', async (request, response) => {
  try {
    await Note.findByIdAndRemove(request.params.id)

    response.status(204).end()
  } catch (exception) {
    console.log(exception)
    response.status(400).send({ error: 'malformatted id' })
  }
})

//Yksittäisen muistiinpanon lisääminen
notesRouter.post('/', async (request, response) => {
  try {
    const body = request.body

    if (body.content === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }

    const user = await User.findById(body.userId)

    const note = new Note({
      content: body.content,
      important: body.important === undefined ? false : body.important,
      date: new Date(),
      user: user._id
    })

    const savedNote = await note.save()
    user.notes = user.notes.concat(savedNote._id)
    await user.save()

    response.json(Note.format(note))
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'something went wrong...' })
  }
})

//Muistiinpanon tärkeyden muuttaminen
notesRouter.put('/:id', (request, response) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important
  }

  Note
    .findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(Note.format(note))
    })
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'malformatted id' })
    })
})

module.exports = notesRouter