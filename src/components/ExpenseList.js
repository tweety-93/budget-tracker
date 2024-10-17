import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

  function ExpenseList(){
    const {expenses} =useContext(AppContext);
    /* const expenses = [
       { id: 1, name: "Shopping", price: 1000, date: new Date(2023, 7, 14) },
       { id: 2, name: "Food", price: 1250, date: new Date(2023, 9, 11) },
       { id: 3, name: "Childcare", price: 1750 ,date: new Date(2023, 2, 22) },
       { id: 4, name: "Holiday", price: 1000, date: new Date(2023, 6, 15) },
       { id: 5, name: "Car Loan", price: 1000, date: new Date(2023, 12, 25) },
     ];*/

  return (
    <ul className="list-group mt-3 mb-3 fs-5 text square border border-dark">
      {expenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          name={expense.name}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;