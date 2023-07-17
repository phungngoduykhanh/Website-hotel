import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Home/Detail2/Detail";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/detail" element={<Detail />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
