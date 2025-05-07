import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "./Transition";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={location.pathname}>
          <Transition />
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default AnimatedRoutes;
