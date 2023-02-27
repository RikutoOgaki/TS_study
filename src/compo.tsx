import React, { useState } from 'react'

type Parstate = {
    value:string
}

type Childstate = {
    value:string
}

type Childprops = {
    onRikuto:(v:string) => void
}

function Childcmpo(props:Childprops){
    const [state,setState] = useState<Childstate>({
        value:''
    })
    return(
        <div>
            <input type="text" value={state.value}
                onChange = {(e)=> setState({
                    ...state,
                    value:e.target.value
                })}
                onBlur={()=>props.onRikuto(state.value)}
            />
        </div>
    )
}

function compo() {

    const [state,setState] = useState<Parstate>({
        value:''
    })

  return (
    <>
        <div>親{state.value}</div>
        <Childcmpo onRikuto={(v)=> setState({
            ...state,
            value:v
        })}/>
    </>
  )
}

export default compo