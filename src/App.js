import { Footer, NavBar } from "@/components";
import { AboutMe } from "@/pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogList, BlogPost } from "./containers";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar
            logo="DEVLOGEX"
            items={[
              { name: "Blog", link: "/blog" },
              { name: "About", link: "/about" },
            ]}
          />
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
