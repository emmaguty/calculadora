import './App.css';
import gartLogo from './images/gartLogo.png';

//Importar los componentes del boton y la panttalla
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';

import BotonClear from './components/Clear';

//Hook UseState
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  //Funcion que va actualizar el input
  const agregarInput = val => {
    setInput(input + val);
  };

  return (
    <div className="App">
      <div className='gart-logo-contenedor'>
        <img
          src={gartLogo}
          alt="gart logo"
          className='gart-logo' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Borrar
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
