import React from 'react'

const Funciones = () => {
    const estado = ""

    const renderEstado = () => {
        switch (estado) {
            case "enviado":
                return <h1>Enviado</h1>; 
            case "entregado":
                return <h1>Entregado</h1>            
            default:
                return <h1>Desconocido</h1>
        }
    };

    return (
        <div>
            {renderEstado()}
            <span>Estado: {estado}</span>
        </div>
    )
}

export default Funciones