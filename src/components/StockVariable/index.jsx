import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useStocksContext } from "../../context/StocksContext";
import StockVariableValue from "./types/StockVariableValue";
import StockVariableIndicator from "./types/StockVariableIndicator";
import NotFound from "../NotFound";

const StockVariable = () => {
  const { id, criteriaId, variableKey } = useParams();
  const { getStock } = useStocksContext();
  const [variable, setVariable] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let stock = await getStock(id);
      let variable = stock.criteria[criteriaId].variable[variableKey];

      setVariable(variable);
    };

    fetchData();
  }, []);

  const components = {
    value: StockVariableValue,
    indicator: StockVariableIndicator,
  };
  const renderComponent = () => {
    if (variable === null) return <h1 className="not-found__msg">Loading...</h1>;
    if (variable === undefined) return <NotFound />;

    let Component = components[variable.type];
    return <Component variable={variable} />;
  };

  return renderComponent();
};

export default StockVariable;
