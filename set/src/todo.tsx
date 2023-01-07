import React, { useState } from 'react'

function todo() {
    const[todo,setTodo] = useState("");
    const[add,setAdd] = useState("");


    const clickEvent = () =>{
        setAdd(todo)
        setTodo("");
    }
    const clickDelete = () =>{
      setAdd("");
    }
  return (
    <div>
            <input
            value={todo}
            onChange={(event)=>setTodo(event.target.value)}
        />
        <button onClick={clickEvent}>追加</button>
        <button onClick={clickDelete}>削除</button>
        <p>{add}</p>
    </div>
  )
}

export default todo