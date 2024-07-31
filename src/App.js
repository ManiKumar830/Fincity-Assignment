
import { Routes, Route,BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <About/>
      <Routes>   
        <Route  element={<About />} />
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
