import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom"; // Added Outlet import
import DefaultNavBar from "./components/DefaultNavBar";
import FooterMain from "./components/FooterMain.jsx";
import Home from "./components/HomeMain.jsx";
import About from "./components/About.jsx";
import Blogs from "./components/Blogs.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import Github from "./components/Github.jsx";




// Default layout with DefaultNavbar
const DefaultLayout = () => (
  <>
    <DefaultNavBar />
    <Outlet /> {/* Placeholder for nested routes */}
    <FooterMain />
  </>
);


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for pages using SideHeader */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/github" element={<Github />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </Router>
  );
};

export default App;
