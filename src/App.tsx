import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact/Contact";
import Detail from './pages/Detail/Detail';
import RoomDetail from "./pages/roomDetail/roomDetail";
import Amenities from "./pages/roomDetail/amenities";
import Gallery from "./pages/Gallery/gallery";
import CusInfor from "./pages/CusInfor/CusInfor";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/detail" element={<Detail />}/>
        <Route path="/detailroom/:id" element={<RoomDetail />} />
        <Route path="/amenities/:id" element={<Amenities />} />
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/cusinfor" element={<CusInfor />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
