function Boton (props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    }; 

    return (
        <div 
        className={`boton-contenedor ${esOperador(props.children) ? 'Operador' : null}`} >
            {props.children}
        </div>
    )
}

export default Boton;