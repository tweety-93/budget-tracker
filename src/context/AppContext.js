import React,{createContext,useReducer} from "react";

const AppReducer=(state,action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses:[...state.expenses,action.payload],
            }
            case 'DELETE_EXPENSE':
                return {
                    ...state,
                    expenses:state.expenses.filter(expense =>expense.id !== action.payload)
                }
        default:return state;
    }
}
//here we import all expenselist in this app context..//
const initialState={
    income:10000,
    expenses : [
       { id: 1, name: "Shopping", price: 1000, date: new Date(2023, 7, 14) },
       { id: 2, name: "Food", price: 1250, date: new Date(2023, 9, 11) },
       { id: 3, name: "Childcare", price: 1750 ,date: new Date(2023, 2, 22) },
       { id: 4, name: "Holiday", price: 1000, date: new Date(2023, 6, 15) },
       { id: 5, name: "Car Loan", price: 1000, date: new Date(2023, 1, 11) },
    ]
};
export const AppContext= createContext();
 export const AppProvider = (props)=>{
  const [state,dispatch]=useReducer(AppReducer,initialState)

  return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				income: state.income,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
}