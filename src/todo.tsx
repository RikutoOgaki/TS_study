import React, { useState } from 'react'

type TodoState = {
  task:string,
  list:Array<string>
}

function todo() {
  
  const [state,setState] = useState<TodoState>({
    task:'',
    list:[]
  })
  
  const addList=()=>{
    setState({
      ...state,
      list:list.push(state.task)
    })
  }
  

  return (
    <div>
      <input type="text"  value={state.task}
        onChange={(e)=>setState({
          ...state,
          task:e.target.value
        })}
      />
      <input type="button" value="やることリストに追加" 
        onClick={()=> addList()}
      />
      {state.list.map((v)=>
        <p key={v}>{v}</p>
      )}
    </div>
  )
}

export default todo