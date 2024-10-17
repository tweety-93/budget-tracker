import React,{useContext} from 'react';
import {AppContext} from '../context/AppContext';
function Balance() {
  const {expenses,income}  =useContext(AppContext);

const totalExpenses =expenses.reduce((total,item)=>{
  return (total += item.price);
},0);


  return (
    <div className="alert alert-success bg-success fs-5 text-light fw-bold">
      <span>Balance:{income - totalExpenses}</span>
    </div>
  );
}

export default Balance;