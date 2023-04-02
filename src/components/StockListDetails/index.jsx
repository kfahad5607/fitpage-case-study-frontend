import { useParams, Link } from "react-router-dom";
import { useStocksContext } from "../../context/StocksContext";
import { useState, useEffect } from "react";
import reactStringReplace from "react-string-replace";
import { getTagColor } from "../../utils";
import "./index.css";

const StockListDetails = () => {
  const { id } = useParams();
  const { getStock } = useStocksContext();
  const [currentStock, setCurrentStock] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let stock = await getStock(id);
      setCurrentStock(stock);
    };

    fetchData();

    return () => {};
  }, []);

  const getVariableComponent = (variable, match, index) => {
    let value;
    if (variable.type === "value") value = variable.values[0];
    if (variable.type === "indicator") value = variable.default_value;

    return (
      <Link className="stock-list-item__param" key={match + index} to={`${index}/${match}`}>
        ({value})
      </Link>
    );
  };

  const diplaySubCriteria = (subCriteria, index) => {
    if (subCriteria.type === "variable") {
      return reactStringReplace(subCriteria.text, /(\$[0-9]+)/g, (match, i) => getVariableComponent(subCriteria.variable[match], match, index));
    }

    return subCriteria.text;
  };

  const displayCriteria = (criteria) => {
    return criteria.map((subCriteria, subCriteriaIdx) => (
      <div key={subCriteriaIdx} className="stock-details__criteria">
        {subCriteriaIdx > 0 && <div className="stock-details__criteria-divider">and</div>}
        <div key={subCriteriaIdx} className="stock-details__criteria-text">
          {diplaySubCriteria(subCriteria, subCriteriaIdx)}
        </div>
      </div>
    ));
  };

  return (
    <>
      {currentStock && (
        <div className="stock-details">
          <div className="stock-details__header">
            <div className="stock-list-item__name">{currentStock.name}</div>
            <div style={{ color: getTagColor(currentStock.color) }} className="stock-list-item__tag">
              {currentStock.tag}
            </div>
          </div>
          <div className="stock-details__body">
            <div className="stock-details__criterias">{displayCriteria(currentStock.criteria)}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default StockListDetails;
