const express = require("express")
const server = express()

const todoRoute = require("./routes/todos")

server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.set("view engine","hbs")// telling express that we are using hbs as view engine
server.set("views", __dirname + "/views")// telling express to look for views(templates) in views directory

server.use("/todos",todoRoute)

server.listen(5678)