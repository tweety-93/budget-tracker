import React,{useContext} from 'react';
import {AppContext} from '../context/AppContext';
function Expense() {
  const {expenses}=useContext(AppContext);
 
  const total=expenses.reduce((total,item)=>{
    return (total += item.price);
  },0);


  return (
    <div className="alert alert-danger bg-danger fs-5 text-light fw-bold">
      <span>Expense:{total}</span>
    </div>
  );
}

export default Expense;