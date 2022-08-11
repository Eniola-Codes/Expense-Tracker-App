
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";

const Expenses = (props) => {
  let [selectedYear, setSelectedYear] = useState("2020");

  const yearFilterHandler = (enteredGetYear) => {
    setSelectedYear(enteredGetYear);
  };

  const expensesFilter = props.items.filter((expenses) => {
          return expenses.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} yearFilter={yearFilterHandler} />
      <ExpensesChart expenses={expensesFilter} />
      <ExpensesList items={expensesFilter} />
    </Card>
  );
};

export default Expenses;
