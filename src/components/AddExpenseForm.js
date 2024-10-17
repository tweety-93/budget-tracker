import React,{useState,useContext} from 'react';
import { AppContext } from '../context/AppContext';

function AddExpenseForm() {
  const {dispatch}=useContext(AppContext);
const [name,setName]=useState('');
const [price,setPrice]=useState('');
const [date,setDate]=useState('');

const nameHandler=(event)=>{
   setName(event.target.value)
}
const priceHandler=(event)=>{
  setPrice(event.target.value)
}
const dateHandler=(event)=>{
  setDate(event.target.value)
}
const submitHandler=(e) =>{
  e.preventDefault();
   // console.log(name,price,date);
    const expense = {
      name:name,
      price:+price,
      date:new Date(date)
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
    setName('');
    setPrice('');
    setDate('');
  

}
return (
  <form onSubmit={submitHandler}>
    <div className="row ">
      <div className="col-sm col-lg-4 fs-5 text">
        <label htmlFor="text">Name</label>
        <input
          type="text"
          id="name"
          className="form-control square border border-dark"
          value={name}
          onChange={nameHandler}
        />
      </div>

      <div className="col-sm col-lg-4 fs-5 text">
        <label htmlFor="text">Price</label>
        <input
          type="number"
          id="cost"
          className="form-control square border border-dark"
          value={price}
          onChange={priceHandler}
        />
      </div>
    </div>

    <div className="col-sm col-lg-4 fs-5 text">
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        className="form-control square border border-dark"
        value={date}
        onChange={dateHandler}
      />
    </div>

    <div className="row mt-3">
      <div className="col-sm">
        <button type="submit" className="btn btn-primary btn-lg">
          Submit
        </button>
      </div>
    </div>
  </form>
);
}

export default AddExpenseForm;