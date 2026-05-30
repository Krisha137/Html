import { useState } from "react";

function US5(){
    const [task,settask]=useState(" ")
    const [todolist,settodolist]=useState([])

    function addtask(){
        settodolist([...todolist,{id:Date.now(),name:task}])
        settask(" ")
    }

    function deletetask(id){
        settodolist(todolist.filter((t)=> t.id !== id))
    }

    return (
        <>
        <br></br>
        <input type="text" value={task} placeholder="Enter Task" onChange={(e)=>settask(e.target.value)}/>
        <br>
        </br>
        <button onClick={addtask}>Add</button>
        <br>
        </br>
        {todolist.map((t)=>
        <div key={t.id}>
            <h3>{t.name}</h3>
            <button onClick={()=>deletetask(t.id)}>Delete</button>
        </div>)}
        
        </>
    )
}export default US5;