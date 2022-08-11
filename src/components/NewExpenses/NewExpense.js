import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  let [isEditing, setIsEditing] = useState(false);

  const saveExpenseHandler = (expenseData) => {
    const expenseInfo = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseInfo);

    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}

      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveData={saveExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
