import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<div>Hello</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
