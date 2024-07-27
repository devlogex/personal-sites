import { NavBar } from "@/components";
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
              { name: "About", link: "/about" },
              { name: "Blog", link: "/blog" },
            ]}
          />
          <Routes>
            <Route path="/" element={<div>HomePage</div>} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
