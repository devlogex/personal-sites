import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from "@/components";
import { BlogPage, HomePage } from "@/pages";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
