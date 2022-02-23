import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./components/landing/Landing.js"



function App() {
  return (
	  <BrowserRouter>
	  <>
		<Routes>
			<Route exact path="/" element={<Landing/>}/>
	  	</Routes>
	  </>
	  </BrowserRouter>
  );
}

export default App;
