/**
 * This is a web server a for bible study application.
 * 
 * @created 2023-05-10
 * @author Adam Ballinger
 * @license MIT
 */


const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const path = require('path');

// Serve images from the "images" directory.
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve HTML files from the "views" directory.
app.use(express.static(path.join(__dirname, 'views')));

// Declare connection uri for connecting to mongodb.
const uri = 'mongodb+srv://ballinger5421:BLaWlLUoHOFjsmob@cluster0.7il4rnh.mongodb.net/?retryWrites=true&w=majority'

// Use an async function to connect to mongodb in the background. Log a message if the connection fails.
async function connectToDatabase() {
    console.log({'message': 'Connecting to mongoose...'});
    try {
        await mongoose.connect(uri);
    } catch (error) {
        console.log({'message': 'Mongoose connection error.', 'error': error});
    }

    console.log({'message': 'Mongoose connection successful.'});
}
  
connectToDatabase();
  
// Start the server on PORT or 3000 if PORT is not set.
var server = http.listen(process.env.PORT || '3000', () => {
    console.log({'message': `Server is listening on port ${server.address().port}.`})
});