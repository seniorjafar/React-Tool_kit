import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './context/store.js'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
        <Provider store={store}>
            <App />
        </Provider>
   
)
