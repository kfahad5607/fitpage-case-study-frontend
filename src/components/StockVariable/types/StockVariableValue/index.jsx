const StockVariableValue = ({ variable }) => {
  const compare = (a, b) => Math.abs(a) - Math.abs(b);

  const sorter = (numbers) => {
    let decimals = [];
    let wholes = [];

    for (let i = 0; i < numbers.length; i++) {
      if (Number.isInteger(numbers[i])) {
        wholes.push(numbers[i]);
      } else {
        decimals.push(numbers[i]);
      }
    }

    decimals.sort(compare);
    wholes.sort(compare);

    return decimals.concat(wholes);
  };

  return (
    <>
      {variable && (
        <div className="stock-list__items">
          {sorter(variable.values)
            .sort(sorter)
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
