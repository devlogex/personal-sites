import NavBar from "./components/navbar";
import AboutMe from "./pages/AboutMe/AboutMe.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar logo="DEVLOGEX" items={[{ name: "About", link: "/about" }]} />
          <Routes>
            <Route path="/" element={<div>HomePage</div>} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
