import './App.css';
import gartLogo from './images/gartLogo.png';

//Importar el componente Boton
import Boton from './components/Boton';

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
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>        
      </div>
    </div>
  );
}

export default App;
