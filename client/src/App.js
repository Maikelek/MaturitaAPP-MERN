import {BrowserRouter,Routes,Route,} from "react-router-dom";

import Index from "./pages/Index"

import MaturitaChooser from "./pages/maturita/MaturitaChooser"
import MaturitaTest from "./pages/maturita/MaturitaTest"

import MonitorChooser from "./pages/monitor/MonitorChooser"
import MonitorTest from "./pages/monitor/MonitorTest"


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

          <Route path="/monitor" element={<MonitorChooser/>}/>
          <Route path="/monitor/:id" element={<MonitorTest/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;