
import { Routes, Route,BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        

        <Route exact path="/" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
