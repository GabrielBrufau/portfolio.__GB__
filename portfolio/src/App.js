import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gabriel Nestor Brufau
        </p>
        <a
          className="App-link"
          href="https://github.com/GabrielBrufau"
          target="_blank"
          rel="noopener noreferrer"
        >
	  github
	  </a>
	  <br/>
	  <p>
          Programador independiente de código abierto con un año de experiencia
	  en industrias de tecnología especializado en crear y ejecutar apps exitosas
	  con una documentación, estructura y buenas prácticas que permitan integrar
	  facilmente nuevas características funcionalidades, así también a nuevos desarrolladores
	  al equipo para el mantenimiento y creación del código.
        </p>
      </header>
    </div>
  );
}

export default App;
