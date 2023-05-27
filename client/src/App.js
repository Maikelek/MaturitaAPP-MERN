import {BrowserRouter,Routes,Route,} from "react-router-dom";

import Index from "./pages/Index"

import MaturitaChooser from "./pages/maturita/MaturitaChooser"
import MaturitaTest from "./pages/maturita/MaturitaTest"

import "./App.css";



function App() {
  return ( 
    <div className="App">
      <BrowserRouter>  
        <Routes>
          <Route path="*" element={<Index/>}/>

          <Route path="/" element={<Index/>}/>

          <Route path="/maturita" element={<MaturitaChooser/>}/>
          <Route path="/maturita/:id" element={<MaturitaTest/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;