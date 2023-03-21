//express
const express = require('express');
const { appendFile } = require('fs');
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');

//router
const router = express.Router();

//SELECT all
router.get('/', getWorkouts)

//SELECT by id
router.get('/:id', getWorkout)

//POST new workout
router.post('/', createWorkout)

//DELETE workout by ID
router.delete('/:id', deleteWorkout);

//UPLOAD workout by ID
router.patch('/:id', updateWorkout)

//export router
module.exports = router