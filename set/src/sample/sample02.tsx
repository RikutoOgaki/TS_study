import React, { useState } from 'react'
import SampleCompo from './sample-componet02'

type SampleFormState = {
  memo:string
}

function sample02() {

    const [state,setState] = useState<SampleFormState>({
      memo:'XXXX'
    });

  return (
    <div>
      <p>sampleForm0019 コールバック</p>
      <p>親の内部状態={state.memo}</p>
      <SampleCompo memo={state.memo}
        onOkamoto={(v)=> setState({
          ...state,
          memo:v
        })}
      />
    </div>
  )
}

export default sample02