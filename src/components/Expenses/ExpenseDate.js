// import React from 'react';
// import './ExpenseDate.css';

// const ExpenseDate = (props) =>
// {

//     const month = props.date.toLocaleString('en-Us', {month : 'long'});
//     const year = props.date.getFullYear();
//     const day = props.date.toLocaleString('en-Us',{day : '2-digit'} );



//     return (
//              <div className='expense-date'>
//                 <h2 className='expense-date__month'>{month}</h2>
//                 <h2 className='expense-date__year'>{year}</h2>
//                 <h2 className='expense-date__day'>{day}</h2>
//             </div> 
//     );
// }

// export default ExpenseDate;




import React from "react";
import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
