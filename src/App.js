import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";
import News from "./pages/News";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
