import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import HomeTemplates from "./templates/HomeTemplates";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Skill from "./components/skill/Skill";
import Work from "./components/Work/Work";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplates />}>
          {/* Home components */}
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/skills" element={<Skill />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="*" element={<Navigate to="" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
