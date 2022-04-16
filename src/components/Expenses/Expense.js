import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

import { useState } from "react";

import "./Expense.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function Expense(props) {
  const [expense, setExpense] = useState(DUMMY_EXPENSES);
  const [year, setYear] = useState("2019");
  if (
    props.newExpense.id !== undefined &&
    !expense.find((expense) => expense.id === props.newExpense.id)
  ) {
    setExpense((prevExpenses) => {
      return [props.newExpense, ...prevExpenses];
    });
  }

  const filterDataByYear = (year) => {
    const newExpense = expense.filter((expense) => {
      return expense.date.getFullYear().toString() === year ? expense : "";
    });
    setYear(year);
    setExpense(newExpense);
  };

  const onResetHandler = () => {
    setExpense([]);
    setExpense(DUMMY_EXPENSES);
  };

  let expenseContent = <p> No Expense Found</p>;

  if (expense.length > 0) {
    expenseContent = expense.map((item) => (
      <ExpenseItem expense={item} key={item.id}></ExpenseItem>
    ));
  }
  return (
    <Card className="expense">
      <ExpenseFilter
        onSelected={year}
        onChangeYear={filterDataByYear}
        onReset={onResetHandler}
      />
      {expenseContent}
    </Card>
  );
}

export default Expense;
