import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  let [enteredTitle, setEnteredTitle] = useState("");
  let [enteredAmount, setEnteredAmount] = useState("");
  let [enteredDate, setEnteredDate] = useState("");

  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const changeAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    
  };



  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={changeTitleHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            step="0.01"
            value={enteredAmount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2019"
            max="12-12-2022"
            value={enteredDate}
            onChange={changeDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
