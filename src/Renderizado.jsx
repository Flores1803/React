function PanelUsuario() {
    const isLogged = true; 
    const nuevosMensajes = [];
    return (
        <div>
            <h1>Panel de Usuario</h1>
            {isLogged ? (<button>Cerrar Sesión</button>) : (<button>Iniciar Sesión</button>) }
            {nuevosMensajes.length > 0 && (<p>Tienes {nuevosMensajes.length} nuevos mensajes</p>)}
        </div>
    )
}

export default PanelUsuario