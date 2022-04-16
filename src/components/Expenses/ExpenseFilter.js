import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const onChangeYearHandler = (event) => {
    props.onChangeYear(event.target.value);
  };
  const onResetHandler = () => {
    props.onReset();
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <button className="expenses-filter__btn" onClick={onResetHandler}>
          Reset
        </button>
        <select value={props.onSelected} onChange={onChangeYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
