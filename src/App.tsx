import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact/Contact";
import Detail from './pages/Detail/Detail';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/detail" element={<Detail />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
