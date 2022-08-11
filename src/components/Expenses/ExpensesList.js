import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props =>
{

    if(props.items.length === 0){
        return (
            <div className='expenses-list__fallback'>
                No Expenses Found
            </div>
        )
    }

    return (
        <div>
        {props.items.map((expense) => (<ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}        
            />
        ))}
        </div>
    )
}

export default ExpensesList;