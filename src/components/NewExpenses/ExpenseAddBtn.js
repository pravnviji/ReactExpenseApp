import React from "react";

import "./ExpenseForm.css";

const ExpenseAddBtn = (props) => {
  const onPressAddExpense = () => {
    props.addExpense();
  };

  return (
    <div className="new-expense__btn">
      <button type="button" onClick={onPressAddExpense}>
        Add Expense
      </button>
    </div>
  );
};

export default ExpenseAddBtn;
