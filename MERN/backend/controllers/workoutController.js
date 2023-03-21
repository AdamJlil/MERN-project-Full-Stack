const { createIndexes } = require('../models/Workout');
const Workout = require('../models/Workout');
const mongoose = require('mongoose');

//GET ALL workout
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    
    if(!workouts){
        return res.status(404).json({erreur : "No Such Workout."});
    }
    res.status(200).json(workouts)
}

//GET SINGLE workout
const getWorkout = async (req,res) => {
    const {id} = req.params;

    //ID has to be 24 byte TYPE or the app will crash
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({erreur : "No Such Workout."});
    }//else
    const workout = await Workout.findById(id);

    //null value from select
    if(!workout){
        return res.status(404).json({erreur : "No Such Workout."});
    }//else
    res.status(200).json(workout);
}

//POST workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body;

    //add document to DB
    try{
        const workout = await Workout.create({
            title,
            reps,
            load
        });
        res.status(200).json(workout)
        
    }
    catch(err){
        res.status(400).json({error : err.msg})
    }
}

//DELETE workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err : 'Cannot Delete Workout.'})
    }
    const delWorkout = await Workout.findByIdAndDelete({_id: id});

    if(!delWorkout){
        return res.status(404).json({err : 'Cannot Delete Workout.'})
    }
    res.status(200).json(delWorkout)
}

//UPDATE workout
const updateWorkout = async (req, res) => {
    const {id} = req.params;
    const {title, load, reps} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err : "No Such Workout"})
    }
    const upWorkout = await Workout.findOneAndUpdate({_id: id}, {title, reps, load});

    if(!updateWorkout){
        return res.status(400).json({err : "No Such Workout"})
    }
    res.status(200).json(upWorkout);

}


module.exports = {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
}