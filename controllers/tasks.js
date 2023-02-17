const Task = require('../models/task');


// Getting all the tasks
const getAllTasks = async (req, res) => {
    try {
        const allTasks = await Task.find({});
        console.log(allTasks);
        res.status(200).json({ allTasks });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}

// Getting an specific task
const getOneTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({ msg: 'No task found' });
        }

        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// Creating a new task
const createTask = async (req, res) => {
    try {
        const task = await new Task(req.body);
        await task.save();
        console.log(task);
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// Updating a task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.body);
        const task = await Task.findByIdAndUpdate(id, { ...req.body }, {
            new: true,
            runValidators: true
        });

        if (!task) {
            return res.status(404).json({ msg: 'No task found' });
        }

        await task.save();
        res.status(200).json({ task });

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}

// Deleting a task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({ msg: 'No task found' });
        }

        res.status(200).send('Task deleted: ' + task);

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}

module.exports = {
    getAllTasks,
    createTask,
    getOneTask,
    updateTask,
    deleteTask
};