import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact/Contact";
import Detail from './pages/Detail/Detail';
import RoomDetail from "./pages/roomDetail/roomDetail";
import Amenities from "./pages/roomDetail/amenities";
import Gallery from "./pages/Gallery/gallery";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/detail" element={<Detail />}/>
        <Route path="/detailroom" element={<RoomDetail />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
