// code away!
const express = require("express")
const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");

const server = require('./server')
const port = process.env.PORT || 7000







server.listen(port, () =>{
    console.log(`Server listening on http://localhost:${port}`)
})