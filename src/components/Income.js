import React,{useContext} from 'react';
import {AppContext} from '../context/AppContext';
function Income() {
   const {income}=useContext(AppContext);


  return (
    <div className="alert alert-info bg-info fs-5 text-light fw-bold">
      <span>Income:{income}</span>
    </div>
  );
}

export default Income;