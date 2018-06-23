const routes = require("express").Router();

let todoArr = [{task:"First Task"},{task:"Second Task"}]

routes.get("/",(req,res)=>
{
    res.render("todos",{todoArr})// means todoArr object will be rendered by todos.hbs
})

routes.post("/",(req,res)=>
{
    todoArr.push(
        {
            task:req.body.newtodo
        }
    )
    res.redirect("todos")// means redirecting client's request to a different location(same page in this case)
})

module.exports = routes