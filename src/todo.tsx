import React, { useState } from 'react'

type Todostate = {
  memo:string,
  list:Array<string>
}

function todo() {

  const [state,setState] = useState<Todostate>({
    memo:'',
    list:[]
  })

  const addList = () =>{
      setState({
        ...state,
        list:[state.memo]
      })
  }
  
  console.log(state.list);
  

  return (
    <>
        <input type="text"  value={state.memo}
          onChange={(e)=>setState({
            ...state,
            memo:e.target.value
          })}
        />
        <input type="button" value="追加" 
          onClick={()=> addList()}
        />
        
    </>
  )
}

export default todo