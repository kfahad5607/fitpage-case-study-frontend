import { useState } from "react";
import { titleCase } from "../../../../utils";

const StockVariableIndicator = ({ variable }) => {
  const [parameter, setParameter] = useState(variable.default_value);

  const getUpperCase = (text) => {
    return text && text.toUpperCase();
  };

  return (
    <>
      {variable && (
        <>
          <div className="stock-list__header">
            <div className="stock-list__heading">{getUpperCase(variable.study_type)}</div>
            <div className="stock-list__title">Set Parameters</div>
          </div>
          <div className="stock-details__header stock-details__header--white">
            <div className="stock-input">
              <label className="stock-input__label">{titleCase(variable.parameter_name)}</label>
              <div className="stock-input__field">
                <input type="number" value={parameter} onChange={(e) => setParameter(e.target.value)} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StockVariableIndicator;
