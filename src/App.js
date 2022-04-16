import "./App.css";
import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const App = () => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
    id: undefined,
  });

  const addExpenseHandler = (expense) => {
    setUserInput({
      title: expense.enteredTitle,
      amount: expense.enteredAmount,
      date: new Date(expense.enteredDate),
      id: expense.id,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewExpenses onAddExpense={addExpenseHandler} />
        <Expense newExpense={userInput} />
      </header>
    </div>
  );
};

export default App;
