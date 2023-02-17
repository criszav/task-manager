const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true,
        maxlength: [25, 'Name cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = new mongoose.model('Task', TaskSchema);