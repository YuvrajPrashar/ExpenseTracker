import { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, SelectedYear] = useState("All");

  const ValueSelected = (e) => {
    SelectedYear(e);
  };

  const FilteredElement = props.items.filter((e) => {
    if (filteredYear === "All") {
      return true;
    } else {
      return e.date.getFullYear().toString() === filteredYear;
    }
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter Selected={filteredYear} OnFilterSel={ValueSelected} />
        <ExpensesChart expenses={FilteredElement} />
        <ExpensesList items={FilteredElement} />
      </Card>
    </div>
  );
}

export default Expenses;
