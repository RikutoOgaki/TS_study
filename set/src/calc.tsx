import React, { useState } from 'react'

function calc() {

    const [state,setState] = useState({
        a:'',
        b:'',
        result:0
    })

  return (
    <>
        <input type="text" value={state.a}
            onChange = {(e)=>{
                setState({
                    ...state,
                    a:e.target.value
                })
            }}
        />
                <input type="text" value={state.b}
            onChange = {(e)=>{
                setState({
                    ...state,
                    b:e.target.value
                })
            }}
        />
        <input type="button" value={"計算"}
            onClick={()=>{
                const numA = parseInt(state.a)
                const numB = parseInt(state.b)
                setState({
                    ...state,
                    result: numA + numB
                })
            }}
        />
        <p>{state.result}</p>
    </>
  )
}

export default calc