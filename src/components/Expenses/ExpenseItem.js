import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props?.expense?.date} />
        <div className="expense-item__description">
          <h2>{props?.expense?.title}</h2>
          <ExpenseAmount amount={props?.expense?.amount} />
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
