import { useState } from "react";
import ExpensesForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const SavedData = (ExpensesData) => {
    const ExpenseDataEntered = {
      ...ExpensesData,
      id: Math.random().toString(),
    };
    props.onAddExpense(ExpenseDataEntered);
    setIsEditing(false);
  };

  const FormState = () => {
    setIsEditing(false);
  };

  const BtnHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={BtnHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpensesForm onSaveExpenseData={SavedData} cancel={FormState} />
      )}
    </div>
  );
};
export default NewExpense;
