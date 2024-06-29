import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { storeCarrito } from './Redux/storeCarrito.js'
import axios from 'axios'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={storeCarrito}>
    <App/>
    </Provider>
  </React.StrictMode>,
)
