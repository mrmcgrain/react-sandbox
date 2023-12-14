const express = require("express")  // extracts express files from node_modules

const app = express() // creates a local instance of an express server

const port = 8080; // define our port number for the server to run on
// 8000s are for backend/servers. 

// routes here  - this is the core syntax for basic get request routes

//expressServer.OnAGetRequestTO(<URL PATH>, < ACTIVATE CALLBACK FUNCTION () => 
//       <RESPOND>.sendFile(<This Directory Path> + <Local filepath to HTML>))


app.get("/", (req, res) => {
    res.send("Go to /users, /posts, /comments, or /todos for JSON.")
})
app.get("/posts", (req, res) => {
    res.sendFile(__dirname + "/data/posts.json")
})

app.get("/comments", (req, res) => {
    res.sendFile(__dirname + "/data/comments.json")
})

app.get("/todos", (req, res) => {
    res.sendFile(__dirname + "/data/todos.json")
})
app.get("/users", (req, res) => {
    res.sendFile(__dirname + "/data/users.json")
})


// always has to be at the bottom - the actual listener that hears the requests at the routes above, and activates the (req, res) callback function to do respond/do whatever that route does
app.listen(port, () => {
    console.log("Server is running on port " + port)
})