const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    phone:{
        type: String,
        required: true,
        unique: true,
    },
    qualification:{
        type: String,
        required: true,
    },
    experience:{
        type: Number,
        required: true,
    },
    skills:{
        type: String,
        required: true,
    },
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports=Candidate;