import './App.css';
import gartLogo from './images/gartLogo.png';

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
        
      </div>
    </div>
  );
}

export default App;
