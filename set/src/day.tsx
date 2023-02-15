import React, { useEffect, useState } from 'react'

function day() {
    const [state,setState] = useState('');

    useEffect(()=>{
        setState(new Date().toLocaleTimeString())
    })

  return (
    <div>
        {state}
    </div>
  )
}

export default day