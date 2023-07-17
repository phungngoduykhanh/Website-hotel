import { Routes, BrowserRouter, Route } from "react-router-dom";
import RoomDetail from "./pages/Home/roomDetail/roomDetail";
import Gallery from "./pages/Home/roomDetail/gallery";
// import Gallery from "./pages/Home/roomDetail/gallery";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail" element={<RoomDetail />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
