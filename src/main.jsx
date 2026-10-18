import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './HelloWorld.jsx'
import FirstComponent from './FirstComponent.jsx'
import PanelUsuario from './Renderizado.jsx'
import Render2 from './Render2.jsx'
import Funciones from './Funciones.jsx'
import Funciones1 from './Funciones1.jsx'
import Contador from './Contador.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Contador />
        <FirstComponent />
        <App />
        <PanelUsuario />
        <Render2 />
        <Funciones />
        <Funciones1 />
    </React.StrictMode>
)