import logo from './planeta.png';
import './App.css';

function App() {
  return (
	  <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
	  <div className="App">
	  <p className="App-link">
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
          <p className="App-link">
        	La vida es como una caída libre lo mejor que podemos hacer es disfrutar este momento.   
        
       
        </p>

	  </div>
	  </>
  );
}

export default App;
