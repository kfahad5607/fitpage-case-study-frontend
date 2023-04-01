import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./index.css";
import { useStocksContext } from "../../context/StocksContext";
import { getTagColor } from "../../utils";

const StockList = () => {
  const { getStocks, stockItems } = useStocksContext();

  useEffect(() => {
    getStocks();

    return () => {};
  }, []);

  return (
    <div className="stock-list">
      <div className="stock-list__container">
        <ul className="stock-list__items">
          {stockItems.map((stockItem) => {
            return (
              <li key={stockItem.id} className="stock-list-item">
                <Link className="stock-list__link" to={`/${stockItem.id}`}>
                  <div className="stock-list-item__name">{stockItem.name}</div>
                  <div style={{ color: getTagColor(stockItem.color) }} className="stock-list-item__tag">
                    {stockItem.tag}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default StockList;
