const routes = require("express").Router();

let todoArr = [{task:"First Task"},{task:"Second Task"}]

routes.get("/",(req,res)=>
{
    res.render("todos",{todoArr})
})

routes.post("/",(req,res)=>
{
    todoArr.push(
        {
            task:req.body.newtodo
        }
    )
    res.redirect("todos")
})

module.exports = routes