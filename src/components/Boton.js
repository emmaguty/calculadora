function Boton (props) {

    // Funcion para saber si es operador
    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    }; 

    return (
        <div 
        className={`boton-contenedor ${esOperador(props.children) ? 'Operador' : ''}`.trimEnd()} >
            {props.children}
        </div>
    )
}

export default Boton;