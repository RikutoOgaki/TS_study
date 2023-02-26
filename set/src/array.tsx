// setStateを使って配列の内部状態を変更する
// for文の数だけ描画されるが、keyで連番をもたせているから二回目を押したときにエラーが出るから完璧じゃない



import React, { useState } from 'react'

function array() {

    const [state,setState] = useState<number[]>([])

    const addTodo = () => {
        for(let i=0; i<10; i++){
            setState((state=>[...state,i]))
        }
    }


  return (
    <div>
        <button
            onClick={addTodo}
        >リスト表示</button>
        <ul>
            {state.map((e)=><li key={e}>e={e}</li>)}
        </ul>
    </div>
  )
}



export default array