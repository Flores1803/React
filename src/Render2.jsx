function Render2() {
    const islogging = false;
    const usuario = 'usuario';

    if (islogging) {
        return <div><h1>Cargando perfil ...</h1></div>;
    }

    if (!usuario) {
        return <div><h1>No existe Usuario</h1></div>;
    }

    return (
        <div>
            <h1>Render2</h1>
        </div>
    )
}

export default Render2