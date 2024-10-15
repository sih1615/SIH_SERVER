const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    accType: {
        type: String,
        enum: ["Student", "Instructor"],
        required: true,
        message: `{VALUE} is not a valid accType`
    },
    allRoadmaps: {
        type: [mongoose.Schema.ObjectId],
        required: false
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;