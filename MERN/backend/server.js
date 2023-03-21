//require env
require('dotenv').config();

//express
const express = require('express');
//app express
const app = express();


//require mongoose
const mongoose = require('mongoose');

//require routes
const workoutRoutes = require('./routes/workout');


//middleware
app.use(express.json());

//use router
app.use('/api/workout',workoutRoutes);



//connect to my DB
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        console.log("Connected to DB");
        // listening on port 
        app.listen(process.env.PORT, () => {
            console.log("app listening on port ", process.env.PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    })

