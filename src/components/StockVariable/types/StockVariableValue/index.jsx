import { sortNumbers } from "../../../../utils";

const StockVariableValue = ({ variable }) => {

  return (
    <>
      {variable && (
        <div className="stock-list__items">
          {sortNumbers(variable.values)
            .map((value, valueIdx) => {
              return (
                <div key={valueIdx} className="stock-list-item">
                  <div className="stock-list-item__name">{value}</div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default StockVariableValue;
