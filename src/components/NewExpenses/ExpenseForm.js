import { useState } from "react";
import ExpenseAddBtn from "./ExpenseAddBtn";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  let [isEditing, setIsEditing] = useState(true);

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const addExpenseHandler = () => {
    setIsEditing(false);
  };

  const onPressnCancelHandler = () => {
    setIsEditing(true);
  };

  const commonChangeHandler = (value, field) => {
    console.log(
      "Previous State -->" +
        userInput.enteredTitle +
        ":" +
        userInput.enteredAmount +
        ":" +
        userInput.enteredDate
    );
    setUserInput({
      enteredTitle: field === "title" ? value : userInput.enteredTitle,
      enteredAmount: field === "amount" ? value : userInput.enteredAmount,
      enteredDate: field === "date" ? value : userInput.enteredDate,
    });
    console.log(
      "New State -->" +
        userInput.enteredTitle +
        ":" +
        userInput.enteredAmount +
        ":" +
        userInput.enteredDate
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    props.onSaveExpenseData(userInput);
  };

  return isEditing === true ? (
    <ExpenseAddBtn addExpense={addExpenseHandler} />
  ) : (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={(e) => commonChangeHandler(e.target.value, "title")}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={(e) => commonChangeHandler(e.target.value, "amount")}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={(e) => commonChangeHandler(e.target.value, "date")}
          />
        </div>
      </div>
      <div className="new-expense__btn-seg">
        <div className="new-expense__actions">
          <button type="button" onClick={onPressnCancelHandler}>
            Cancel
          </button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
