const mongoose = require("mongoose");

// How to create a model

// Step 1 trequire mongoose

// Step 2 :Create a nongoose schema (structure of a user)

// Step 3: Create a model

const song =  new mongoose.Schema({

    name: {

        type: String,
        
        required: true,
        
        },
        
        thumbnail: {
        
        type: String,
        
        required: true,
        
        },
        
        track: {
        
        type: String,
        
        required: true,
        
        },
        
        artist: {
        
        type: mongoose. Types.ObjectId,
        
        ref: "user",
        
        },

});

const songmodel = mongoose.model("song",song);

module.exports = songmodel;