import React, {useState} from 'react'
import Slide from './components/slideImg'
import imgArray from './libs/imgArray'
import './app.css'


const array = imgArray;
console.log(imgArray);

const [dis,setDis] = useState();
const [opa,setOpa] = useState();



function ks() {
  return (
    <div className='slide_wrap'>
      <div className='card_wrap'>
          {array.map((e) => 
          <Slide img={e.img} name={e.name} class={e.class}/>
          )}
      </div>
    </div>
  )
}

export default ks