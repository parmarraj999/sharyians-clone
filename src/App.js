import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./component/nav/nav";
import Menu from "./component/overMenu/menu";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Menu/>
        <Routes>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
