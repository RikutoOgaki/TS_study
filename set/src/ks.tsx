import React from 'react'
import Slide from './components/slideImg'
import imgArray from './libs/imgArray'


const array = imgArray;
console.log(imgArray);



function ks() {
  return (
    <div>
        {array.map((e) => 
        <Slide img={e.img}/>
        )}
    </div>
  )
}

export default ks