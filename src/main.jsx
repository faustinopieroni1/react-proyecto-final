import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render( //Llama al nodo "root"  y renderiza funcion "app"
  <React.StrictMode>
    <App /> 
  </React.StrictMode> 
)
