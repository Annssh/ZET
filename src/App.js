import { Route, Routes } from "react-router-dom";
import "./App.css"
import Header from './components/Header';
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/ZET" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
