import React, { useState } from 'react'

function type() {
    const [text,setText] = useState();
    let tex:string = "2"
    let num:number = 4

    let some:any;
    some = 123;  
    some = "はるや";

    type mosu = Number | string;
    mosu = 123
    
  return (
    <div>
        <input value={text} />
        <h1>{num}</h1>
        <h2>{tex}</h2>
        <h3>{some}</h3>
        <h4>{}</h4>
    </div>
  )
}

export default type