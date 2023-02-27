import React, { useState } from 'react'

function sample01() {


    const [state,setState] = useState({
      a:'',
      b:''
    });

  return (
    <div>
        <input type="text" 
            onChange={(e)=>
                setState({
                  ...state,
                  a:e.target.value
                })
            }
        />
        <input type="button" value={"描画"}
          onClick={()=>{
            setState({
              ...state,
              b:state.a
            })
          }}
        />
        <p>{state.b}</p>
    </div>
  )
}

export default sample01