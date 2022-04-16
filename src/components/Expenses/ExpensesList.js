import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  let expenseContent = <p> No Expense Found</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  if (props.items.length > 0) {
    expenseContent = props.items.map((item) => (
      <ExpenseItem expense={item} key={item.id}></ExpenseItem>
    ));
  }

  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpensesList;
