import React from 'react';

function Funciones1() {
    const frutas = ["manzana", "pera", "sandia"];

    return (
        <ul>
            {frutas.map((fruta, index) => (
                <li key={index}>Fruta: {fruta}</li>
            ))}
        </ul>
    );
}

export default Funciones1;