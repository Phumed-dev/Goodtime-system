import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddOrderPage from "./pages/AddOrderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add-order" element={<AddOrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
