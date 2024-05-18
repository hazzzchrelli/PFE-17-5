import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Routing from './Routing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routing/>
    </BrowserRouter>
  </React.StrictMode>,
)