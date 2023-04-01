import { BrowserRouter, Routes, Route } from "react-router-dom";
import StockList from "../StockList";
import StockListDetails from "../StockListDetails";
import StockVariable from "../StockVariable";
import NotFound from "../NotFound";
import { StocksContextProvider } from "../../context/StocksContext";
import "./index.css";

function App() {
  return (
    <div className="main">
      <div className="container">
        <BrowserRouter>
          <StocksContextProvider>
            <Routes>
              <Route path="/" element={<StockList />}></Route>
              <Route path="/:id" element={<StockListDetails />}></Route>
              <Route path="/:id/:criteriaId/:variableKey" element={<StockVariable />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </StocksContextProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
