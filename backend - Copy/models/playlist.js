const mongoose = require("mongoose");

// How to create a model

// Step 1 trequire mongoose

// Step 2 :Create a nongoose schema (structure of a user)

// Step 3: Create a model

const playlist =  new mongoose.Schema({

    name: {

        type: String,
        
        required: true,
        
        },
        
        thumbnail: {
        
        type: String,
        
        required: true,
        
        },
        
       owner: {
        
        type: mongoose. Types.ObjectId,
        
        ref: "song",
        
        },

        //1.playlist men song konse hai
        //2.playlist collaboratrs

        songs: {
        
            type: mongoose. Types.ObjectId,
            
            ref: "song",
            
            },

         collaboraters: {
        
            type: mongoose. Types.ObjectId,
                
             ref: "user",
                
            },
});

const playlistmodel = mongoose.model("playlist",playlist);

module.exports = playlistmodel;