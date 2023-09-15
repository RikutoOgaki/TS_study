import { useState } from 'react'

export default function Sample001() {

    const [state, setState] = useState(0)

    return (
        <>
            <div>
                <p>{state}</p>
                <button onClick={() => setState(state + 1)}>プラス</button>
                <button onClick={() => setState(state - 1)}>マイナス</button>
            </div>
        </>
    )
}