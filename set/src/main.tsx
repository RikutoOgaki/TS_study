import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import Type from './type'
// import './index.css'
import Todo from './todo'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Type/> */}
    <Todo/>
  </React.StrictMode>,
)
