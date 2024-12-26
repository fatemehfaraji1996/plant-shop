import "./App.css";
import Background from "./components/navbar"; // Adjust the path as necessary
import Card from "./components/card";
import PurchaseTable from "./components/shoppingCards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Background />
      <Routes>
        <Route path="/" element={<Card />}/>
        <Route path="/PurchaseTable" element={<PurchaseTable />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
