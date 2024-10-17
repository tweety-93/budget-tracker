import React,{useContext} from 'react';
import { TiDelete } from "react-icons/ti";
import { AppContext } from '../context/AppContext';
import ExpenseDate from './ExpenseDate';

function ExpenseItem (props) {

const {dispatch}=useContext(AppContext);
const deleteHandler=() =>{
  dispatch({
      type:'DELETE_EXPENSE',
      payload:props.id,
    }
  );
}

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center square border border-dark">
      {props.name}
      <div>
        <div className="badge badge-pill bg-secondary mr-5 me-5">
          <ExpenseDate date={props.date} />
        </div>
        <span className="badge badge-pill bg-primary mr-3">${props.price}</span>

        <TiDelete size="1.5em" onClick={deleteHandler} />
      </div>
    </li>
  );
}

export default ExpenseItem;