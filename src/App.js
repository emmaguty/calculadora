import './App.css';
import gartLogo from './images/gartLogo.png';

//Importar el componente Boton
import Boton from './components/Boton';

//Importar el componente pantalla
import Pantalla from './components/Pantalla'

function App() {
  return (
    <div className="App">
      <div className='gart-logo-contenedor'>
        <img 
        src={gartLogo} 
        alt="gart logo"
        className='gart-logo' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla />
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
          <Boton>Borrar</Boton>
        </div>        
      </div>
    </div>
  );
}

export default App;
