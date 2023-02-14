import React, { useState } from 'react'

function sample01() {


    const [state,setState] = useState('');

  return (
    <div>
        <input type="text" 
            onChange={(e)=>
                setState(e.target.value)
            }
        />
        <p>{state}</p>
    </div>
  )
}

export default sample01