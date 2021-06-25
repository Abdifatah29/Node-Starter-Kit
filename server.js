// This is where all our server code is going to live.

// TODO require the express library
const express = require("express");

// TODO Initialise the server
// we need to call the express() function.
// This will create an Express application for us to work with.

const app = express();



// TODO Start 'listening' for potential requests
// we need to set a port for our server to listen to.
// Think of a port as a door number;
// * any requests that come to the server will come via that door

//! We use the (app.listen) method to do this.
// This method takes two arguments:
    // *a port and
    // *a callback function

app.listen(8001, () => {
    console.log('This my first express server')
})
