const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    resources: {
        type: [String],
        required: true
    },
    completionTime: {
        type: Number,
        required: true
    },
    parentRoadmap: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    order: {
        type: Number,
        required: true
    }
})

const Module = mongoose.model('Module', moduleSchema);
module.exports = Module;