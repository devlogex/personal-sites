import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "@/components";
import { AboutPage, BlogPage, PostPage } from "@/pages";
import { Header } from "./containers";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<PostPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
