import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/roomDetail/roomDetail";
// import Gallery from "./pages/Home/roomDetail/gallery";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
