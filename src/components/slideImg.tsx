import React, { useRef, useState } from 'react'
import type from '../type'
import './style.css'


interface propsStyle {
    img: string;
    name: string;
    class: string;
}

const slideImg = (props: propsStyle) => {



    //  const card = useRef<HTMLElement>(null)
    //  card.current.style.opacity = 0;
    //  card.current?.style.display



    return (
        <div className='img_wrap'>
            <h2>{props.name}</h2>
            <p>{props.class}</p>
            <img src={props.img} alt="" />
        </div>
    )
}



// type props = {
//     hoge:string;
// }

// const slideImg = ({hoge}:props) => {
//   return (
//     <div>
//         <img src={hoge} alt="" />
//     </div>
//   )
// } 

export default slideImg