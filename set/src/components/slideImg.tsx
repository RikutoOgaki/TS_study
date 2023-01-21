import React from 'react'
import type from '../type'
import  './style.css'


interface propsStyle {
    img:string;
}

const slideImg = (props:propsStyle) => {
    return (
        <div>
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