import React, { useState } from 'react'

function type() {
    const [text,setText] = useState();
  return (
    <div>
        <input value={text} />
        <h1></h1>
    </div>
  )
}

export default type