import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Income from "./components/Income";
import Balance from "./components/Balance";
import Expense from "./components/Expense";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import {AppProvider} from './context/AppContext';
function App() {
  return (
    <AppProvider>
    
      <div className="container">
        <h1 className="mt-3">Expense Tracker</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Income />
          </div>

          <div className="col-sm">
            <Balance />
          </div>

          <div className="col-sm">
            <Expense />
          </div>
        </div>

        <h2>Expenses</h2>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>

        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
      
    </AppProvider>
  );
}

export default App;
