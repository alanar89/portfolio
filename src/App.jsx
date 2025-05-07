import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
export default App;
