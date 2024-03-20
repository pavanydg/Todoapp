/* todos = [
    {
        title: "go to gym",
        description: "go to gym",
    }
]
*/

import { useState } from "react"

export function Todos({todos}){
    const handleComplete = function(todoId){
        fetch("http://localhost:3200/completed",{
                method: "PUT",
                body: JSON.stringify({
                    _id: todoId
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                response.json()
            })
    }
    return(
        <div>
            {todos.map((todo) => {
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button id="button" onClick={() => {
                       handleComplete(todo.id)
                    }}>{todo.completed == true? "Completed" : "Mark as complete"}</button>
                </div>
            })}
        </div>
    )
}