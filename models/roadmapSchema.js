const mongoose = require('mongoose');

const roadmapSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completionTime: {
        type: Number,
        required: true
    },
    dueDate: {
        type: Date
    },
    enrolledStudents: {
        type: Number,
    }
}, { timestamps: true })

const Roadmap = mongoose.model('Roadmap', roadmapSchema);
module.exports = Roadmap;