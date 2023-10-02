const express = require('express')
const {createNote,getNotes,getNote,deleteNote,updateNote} = require('../controller/noteController')
const router =express.Router()

//Get all notes
router.get('/' ,getNotes)

//Get a single note
router.get('/:id' ,getNote)

//Post a new note
router.post('/' ,createNote)

//Delete a new note
router.delete('/:id' ,deleteNote)

//Update a new note
router.patch('/:id' ,updateNote)

module.exports = router