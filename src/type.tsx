import React, { useState } from 'react'

function type() {
    const [text,setText] = useState();

    // 基本的な型定義
    let tex:string = "2"
    let num:number = 4

    // any型
    let some:any;
    some = 123;  
    some = "マミー";

    // インターフェイス
    interface User{
      name:string;
      full_name:string;
    }
    let name:User;
    name = {
      name:"りくと",
      full_name:"大垣陸斗"
    }
    
  return (
    <div>
        <input value={text} />
        <h1>{num}</h1>
        <h2>{tex}</h2>
        <h3>{some}</h3>
    </div>
  )
}

export default type