let todos=[
    {
        id:0,
        title:"My first day on Job",
        description:"actuall i didnt get the job"
    }
]

const express=require("express")
const app=express()

app.get('/todos',(req,res)=>{
    res.json(todos)
})

app.post('/todos',(req,res)=>{
    const newTodo=req.body
    newTodo.id=todos.length
    todos.push(newTodo)
    res.json(newTodo)
})

app.delete('/todos/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    todos=todos.filter(todo=>todo.id!==id)
    res.sendStatus(200)
})
