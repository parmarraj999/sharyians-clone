import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./layouts/home/home.js"
import Nav from "./layouts/nav/nav.js";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
       <Nav/>
       <Routes>
        <Route path="/" element={<Home/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
