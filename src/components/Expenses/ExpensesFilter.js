// import React from 'react';
// import './ExpensesFilter.css';

// const ExpensesFilter = (props) =>
// {

//     const yearFilterHandler = (event) =>
//     {
//         props.getYear(event.target.value);
//     }

//     return (
//         <div className='expenses-filter'>
//           <div className='expenses-filter__control'>
//             <label>Filter by year</label>
//             <select value={props.onChooseYear} onChange={yearFilterHandler}>
//               <option value='2022'>2022</option>
//               <option value='2021'>2021</option>
//               <option value='2020'>2020</option>
//               <option value='2019'>2019</option>
//             </select>
//           </div>
//         </div>
//       );
//     };
    
// export default ExpensesFilter;




import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const getYearHandler = (event) =>
    {
        props.yearFilter(event.target.value);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={getYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;