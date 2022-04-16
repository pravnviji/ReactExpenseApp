import "./ExpenseAmount.css";

function ExpenseAmount(props) {
  return <div className="expense-amount">${props?.amount}</div>;
}

export default ExpenseAmount;
