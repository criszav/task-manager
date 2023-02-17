require('dotenv').config();
const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');
const connectDB = require('./connectDB');


app.use(express.json());

// Tasks routes
app.use('/api/v1/tasks', taskRoutes);



// Wrong URL handler
app.all('*', (req, res) => {
    res.status(404).json({ msg: 'Page not found' });
})


const PORT = process.env.PORT || 3000;

// Connecting to DB
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Database succesfully connected');
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT ${3000}`);
        })
    } catch (error) {
        console.log("Connection failed: " + error);
    }
}

// Initialise the connection to DB and port
start();


