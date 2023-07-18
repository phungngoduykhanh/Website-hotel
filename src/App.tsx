import { Routes, BrowserRouter, Route } from "react-router-dom";
import RoomDetail from "./pages/Home/roomDetail/roomDetail";
import Amenities from "./pages/Home/roomDetail/amenities";
// import Gallery from "./pages/Home/roomDetail/gallery";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail" element={<RoomDetail />} />
        <Route path="/amenities" element={<Amenities />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
