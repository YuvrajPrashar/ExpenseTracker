import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [EnteredTitle, SetEnteredTitle] = useState("");
  const [EnteredAmt, SetEnteredAmt] = useState("");
  const [EnteredDate, SetEnteredDate] = useState("");

  const TitleHandler = (e) => {
    SetEnteredTitle(e.target.value);
  };
  const AmountHandler = (e) => {
    SetEnteredAmt(e.target.value);
  };
  const DateHandler = (e) => {
    SetEnteredDate(e.target.value);
  };
  const SubmitHandler = (e) => {
    e.preventDefault();

    const ExpenseData = {
      title: EnteredTitle,
      amount: +EnteredAmt,
      date: new Date(EnteredDate),
    };

    props.onSaveExpenseData(ExpenseData);
    SetEnteredAmt("");
    SetEnteredDate("");
    SetEnteredTitle("");
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={EnteredTitle} onChange={TitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={EnteredAmt}
            onChange={AmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={EnteredDate}
            onChange={DateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
