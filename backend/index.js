const express = require("express")
const { createTodo, updateTodo } = require("./types")
const { todo } = require("./db")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

app.post("/todo",async (req,res) => {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
    }
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get("/todos",async (req,res) => {
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put("/completed",async (req,res) => {
    const updatePayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad){
        res.status(411).json({
            msg: "You can't update. Wrong inputs"
        })
    }
    await todo.update({_id: req.body.id},{completed: true})
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3200);