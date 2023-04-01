import { createContext, useState, useContext } from "react";
import stocksAPI from "../api/stocks";

const StocksContext = createContext({
  stockItems: [],
});

export const StocksContextProvider = ({ children }) => {
  const [stockItems, setStockItems] = useState([]);

  const getStocks = async () => {
    try {
      if (stockItems.length) return setStockItems(stockItems);

      const response = await stocksAPI.get("/api/stocks");
      if (response.status === 200) setStockItems(response.data);
    } catch (error) {
      console.log("ERROR in getStocks", error);
    }
  };

  const getStock = async (id) => {
    try {
      let stock = stockItems.find((stockItem) => stockItem.id == id);
      if (stock) return stock;

      const response = await stocksAPI.get(`/api/stocks/${id}`);
      if (response.status === 200) return response.data;
    } catch (error) {
      console.log("ERROR in getStock", error);
    }
  };

  const value = {
    stockItems,
    getStocks,
    getStock,
  };

  return <StocksContext.Provider value={value}>{children}</StocksContext.Provider>;
};

export function useStocksContext() {
  return useContext(StocksContext);
}
